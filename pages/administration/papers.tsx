import { Icon } from "@iconify/react";
import DashboardItem from "../../components/DashboardItem";
import Friend from "../../components/Friend";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Dispatch, Fragment, SetStateAction, useCallback, useEffect, useState } from "react";
import Input from "@/components/basics/Input";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Container from "@/components/Container";
import InputCheckbox from "@/components/basics/InputCheckbox";
import Typo from "@/components/basics/Typo";
import InputImage from "@/components/basics/InputImage";
import TextArea from "@/components/basics/Textarea";
import AsyncSelect from "react-select/async/dist/react-select.cjs";
import SubjectService from "@/services/SubjectService";
import { Answer, ApplicationState, Paper, QuestionRequest, Subject } from "@/store/types";
import Image from "next/image";
import toast from "react-hot-toast";
import { createPaperEffect, deletePaperEffect, getPapersEffect, updatePaperEffect } from "@/store/effects/paper";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "@/components/DeleteModal";
import { useLoginChecker } from "@/utils/hooks";

interface InputFormType {
  subject: string;
  year: number;
  paper_type: string;
  visible_for: string;
  currentTextToDisplay: string;
  currentLetterOrNumber: string;
  currentAnswerText: string;
  currentLetter: string;
}

interface Option {
    label: string;
    value: string;
}

const Papers = () => {
  // Const
  const initialForm = {
    alg: false,
    alc: false,
    olg: false,
    olc: false,
  };
  const initialInputForm: InputFormType = {
    subject: "",
    paper_type: "",
    year: new Date().getFullYear(),
    visible_for: "",
    currentTextToDisplay: "",
    currentLetterOrNumber: "",
    currentAnswerText: "",
    currentLetter: "",
  };
  const initialFilesForm = {
    current_question_image: "",
    current_answer_image: "",
  };

  // Hooks
  const dispatch = useDispatch()
  useLoginChecker(true)
  // Store
  const { paper: {paper_data} } = useSelector((state:ApplicationState) => state)

  // States
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [paper, setPaper] = useState("")
  const [paperToShow, setPaperToShow] = useState<Paper | null>(null)
  const [questionTypeImage, setQuestionTypeImage] = useState(true);
  const [answerTypeImage, setAnswerTypeImage] = useState(false);
  const [subject, setSubject] = useState<Subject | null>(null);
  const [form, setForm] = useState<typeof initialForm>(initialForm);
  const [inputForm, setInputForm] =
    useState<typeof initialInputForm>(initialInputForm);
  const [filesForm, setFilesForm] = useState(initialFilesForm);
  const [questionsRequest, setQuestionsRequest] = useState<QuestionRequest[]>(
    []
  );
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [paperToDelete, setPaperToDelete] = useState<Paper | null>(null)
  
  // Functions
  const closeModal = () => {
    setShowModal(false)
    setPaperToShow(null)
    setForm(initialForm)
    setInputForm(initialInputForm)
    setFilesForm(initialFilesForm)
  };
  const openModal = () => setShowModal(true);
  const showPaper = (paper:Paper) => {
    const {questions, subject, visible_for, ...paperData} = paper
    setInputForm({
      ...inputForm,
      ...paperData
    })

    console.log(questions)

    const questionsData = questions.map(q => ({
      uuid: q?.uuid,
      question: {
        is_an_image: q?.is_an_image,
        image: q?.image,
        text: q?.text,
      },
      answers: q.answers
    }))

    setQuestionsRequest(questionsData)
    setPaperToShow(paper)
    setSubject(subject)
    setForm(initialForm)
    Object.keys(form).forEach(key => {
      if(key === visible_for) {
        setForm({
          ...form,
          [key]: true
        })
      }
    })
  };
  const deleteItemFromArrayState = (
    setState: Dispatch<SetStateAction<any[]>>,
    indexOnArray: number
  ): void => {
    setState((state) => state.filter((item, i) => i !== indexOnArray));
  };
  const changeAnswerType = () => setAnswerTypeImage(!answerTypeImage);
  const changeQuestionType = () => setQuestionTypeImage(!questionTypeImage);
  const handleChange = (e: any): void => {
    setForm((state: typeof initialForm) => {
      Object.keys(state).forEach((key) => {
        // @ts-ignore
        state[key] = false;
      });
      return {
        ...state,
        [e.target.name]: e.target.checked,
      };
    });
};

  const handleInputChange = (e: any): void => {
      setInputForm({
          ...inputForm,
          [e.target.name]: e.target.value,
        });
    };
    
    const loadSubjectPromise = (inputValue: string) =>
    new Promise(async (resolve) => {
      const res = await SubjectService.getSubjects({
        page: 1,
        per_page: 10,
        keyword: inputValue,
      });
      const data = await res.json();
      resolve(
        data?.data || []
      );
    });

    const fetchPapers = useCallback(():void => {
        dispatch(getPapersEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added"
            },
            failCb: ():void => {
                
            },
            successCb: ():void => {
                
            },
            setLoading: () => undefined
        }))
    }, [dispatch])


    const savePaper = () => {
        if(!inputForm.paper_type) {
            return toast.error("Select a paper type")
        }
        if(!(Object.keys(form)!.find((key):boolean => 
        // @ts-ignore
        Boolean(form[key]) ===true) as string)) {
            return toast.error("Select a GCE Visibility")
        }
        const payload = {
            subject_id: subject?.uuid, 
            year: inputForm.year,
            paper_type: inputForm.paper_type,
            visible_for: Object.keys(form)!.find((key):boolean => 
            // @ts-ignore
            Boolean(form[key]) ===true) as string,
            questions: questionsRequest
        }
        if(paperToShow) {
          Object.assign(payload, {uuid: paperToShow.uuid})
        }

        dispatch((paperToShow ? updatePaperEffect : createPaperEffect)({
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data:Paper) => {
                toast.success(`Paper ${paperToShow ? "updated" : "created"}`)
                fetchPapers()
                if(paperToShow) {
                    setPaperToShow(data)
                }
            },
            payload,
        }))
    }

    const deletePaper = () => {
        dispatch(deletePaperEffect({
            range: paperToDelete?.uuid,
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data:any) => {
                toast.success(`Paper deleted`)
                fetchPapers()
                setPaperToDelete(null)
            }
        }))
    }

    useEffect(() => {
      fetchPapers()
    }, [fetchPapers])
    

  return (
    <DashboardLayout titleDesc="admin pannel" admin>
        {((paperToDelete) && (
            <DeleteModal
                message={"Do you really want to delete this?"}
                onAccept={() => deletePaper()}
                onDecline={() => setPaperToDelete(null)}
            />
        ))}
        <Container>
          {(showModal || !!paperToShow) && (
            <Modal
              className="max-w-screen-md"
              handleClose={closeModal}
              type={"dropIn"}
            >
              <div>
                <div>
                  <div>
                    <div>
                      <h2>{paperToShow ? "Edit": "Add"} a paper</h2>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-col">
                    <Typo type="small" className="font-semibold">
                      Subject
                    </Typo>
                    <AsyncSelect
                      value={subject}
                      className="select__control_custom"
                      getOptionLabel={(option) => option?.title}
                      loadOptions={loadSubjectPromise}
                      onChange={(subjectOption) => {
                          setSubject(subjectOption)
                      }}
                      />
                  </div>
                  <div className="flex flex-col">
                    <Input
                      name="year"
                      label="Year"
                      value={inputForm.year}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Typo type="small" className="font-semibold">
                      Papers
                    </Typo>
                    <select
                      className="rounded-sm bg-transparent border h-10 text-black"
                      value={inputForm.paper_type}
                      name={"paper_type"}
                      onChange={(e) => setInputForm({
                          ...inputForm,
                          paper_type: e.target.value
                      })}
                    >
                      <option value=""></option>
                      <option value="paper1">Paper 1</option>
                      <option value="paper2">Paper 2</option>
                      <option value="paper3">Paper 3</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Typo type="small" className="font-semibold mt-4">
                          Visible for
                        </Typo>
                        <InputCheckbox
                          name="alg"
                          checked={form.alg}
                          onClick={handleChange}
                          label="GCE Advanced level Grammar"
                        />
                        <InputCheckbox
                          name="alc"
                          checked={form.alc}
                          onClick={handleChange}
                          label="GCE Advanced level Commercial"
                        />
                        <InputCheckbox
                          name="olg"
                          checked={form.olg}
                          onClick={handleChange}
                          label="GCE Ordinary level Grammar"
                        />
                        <InputCheckbox
                          name="olc"
                          checked={form.olc}
                          onClick={handleChange}
                          label="GCE Ordinary level Commercial"
                        />
                      </div>

                      {/* Answer - question */}
                      <Typo type="small" className="font-semibold mt-4">
                        Questions
                      </Typo>
                      <div>
                        {questionsRequest.map((question, i) => (
                          <div className="relative" key={`question__${i}`}>
                            <button
                              className="text-sm absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 font-semibold flex justify-center items-center leading-none"
                              onClick={() =>
                                deleteItemFromArrayState(setQuestionsRequest, i)
                              }
                            >
                              x
                            </button>
                            {question.question.image ? (
                              <div className="relative h-32 w-32">
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  className="absolute w-full object-contain"
                                  layout="fill"
                                  src={question.question?.image}
                                  alt=""
                                />
                              </div>
                            ) : (
                              <p>{question.question.text}</p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className=" p-4 rounded-md border">
                        <InputCheckbox
                          id="questionIsAnImage"
                          onClick={changeQuestionType}
                          checked={questionTypeImage}
                          label="Question is an image"
                        />
                        {!questionTypeImage ? (
                          <Input
                            label="Text to display"
                            className="flex-grow"
                            name="currentTextToDisplay"
                            value={inputForm.currentTextToDisplay}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <Fragment>
                            <Typo type="small">Image</Typo>
                            <InputImage
                              field={{
                                name: "question_image",
                                onChange: (data: string) =>
                                  setFilesForm({
                                    ...filesForm,
                                    current_question_image: data,
                                  }),
                              }}
                            />
                          </Fragment>
                        )}
                        <Typo type="small">Answers</Typo>
                        {currentAnswers.map((answer, i) => (
                          <div className="relative" key={`answer__${i}`}>
                            <button
                              className="text-sm absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 font-semibold flex justify-center items-center leading-none"
                              onClick={() =>
                                deleteItemFromArrayState(setCurrentAnswers, i)
                              }
                            >
                              x
                            </button>
                            {answer.image ? (
                              <div className="relative h-32 w-32">
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  className="absolute w-full object-contain"
                                  layout="fill"
                                  src={answer?.image}
                                  alt=""
                                />
                              </div>
                            ) : (
                              <p>{answer.text}</p>
                            )}
                          </div>
                        ))}
                        <div className="p-4 border rounded-md">
                          <InputCheckbox
                              id="answerIsAnImage"
                              onClick={changeAnswerType}
                              checked={answerTypeImage}
                              label="Answer is an image"
                          />
                          <InputCheckbox
                              id="isAnswerCorrect"
                              onClick={() => setIsAnswerCorrect(!isAnswerCorrect)}
                              checked={isAnswerCorrect}
                              label="This answer is the correct one"
                          />
                          {!answerTypeImage ? (
                            <div className="border rounded-md p-4">
                              <div className="flex flex-col gap-4">
                                <Input
                                  label="Letter or number"
                                  className="w-28"
                                  name="currentLetter"
                                  value={inputForm.currentLetter}
                                  onChange={handleInputChange}
                                />
                                <TextArea
                                  className="flex-grow p-2"
                                  name="currentAnswerText"
                                  value={inputForm.currentAnswerText}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          ) : (
                            <InputImage
                              field={{
                                name: "answer_image",
                                placeholder: "Add an image or a PDF",
                                onChange: (data: string) =>
                                  setFilesForm({
                                    ...filesForm,
                                    current_answer_image: data,
                                  }),
                              }}
                            />
                          )}

                          <Button
                            className="mt-4 h-10 w-full"
                            onClick={() => {
                                if(!answerTypeImage) {
                                  if (!inputForm.currentLetter ||
                                  !inputForm.currentAnswerText) {
                                      return toast.error("Fill answer correctly")
                                  }
                                } else {
                                    if(!filesForm.current_answer_image) {
                                      return toast.error("Please provide an image")
                                    }
                                }
                              setCurrentAnswers([
                                ...currentAnswers,
                                {
                                  is_an_image: answerTypeImage,
                                  is_correct: isAnswerCorrect,
                                  image: filesForm.current_answer_image,
                                  letter: inputForm.currentLetter,
                                  text: inputForm.currentAnswerText,
                                },
                              ]);
                              setInputForm({
                                ...inputForm,
                                currentAnswerText: "",
                                currentLetter: "",
                              });
                              setFilesForm({
                                ...filesForm,
                                current_answer_image: "",
                              });
                              setAnswerTypeImage(false);
                              setIsAnswerCorrect(false);
                            }}
                          >
                            Add
                          </Button>
                        </div>
                        <Button
                          className="w-full mt-4"
                          onClick={() => {
                              if(!questionTypeImage) {
                                if (!inputForm.currentTextToDisplay) {
                                    return toast.error("Fill question text")
                                }
                              } else {
                                  if(!filesForm.current_question_image) {
                                    return toast.error("Please provide an image to the question")
                                  }
                              }
                              if(currentAnswers.length === 0) {
                                  return toast.error("Provide one answer at least")
                              }
                            setQuestionsRequest((state) => {
                              return [
                                ...state,
                                {
                                  question: {
                                    is_an_image: questionTypeImage,
                                    image: questionTypeImage
                                      ? filesForm.current_question_image
                                      : "",
                                    text: inputForm.currentTextToDisplay,
                                  },
                                  answers: currentAnswers,
                                },
                              ];
                            });
                            setInputForm({
                              ...inputForm,
                              currentTextToDisplay: "",
                            });
                            setFilesForm({
                              ...filesForm,
                              current_question_image: "",
                            });
                            setQuestionTypeImage(false);
                            setCurrentAnswers([])
                          }}
                        >
                          Add question
                        </Button>
                      </div>

                      <Button onClick={savePaper}>Save</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
          <div className="max-w-6xl mx-auto w-full gap-4">
            <div className="my-8 col-span-3 px-4">
              <div>
                <div className="font-bold flex justify-between items-center">
                  <h2 className="text-2xl">Papers</h2>
                  <div className="flex gap-5">
                    <button className="intent shadow-md" onClick={openModal}>
                      <Icon icon="akar-icons:plus" />
                    </button>
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex gap-2 items-center intent py-0 shadow-sm">
                    <Icon icon="akar-icons:search" />
                    <input
                      type="text"
                      className="border-none bg-transparent outline-none flex-grow py-3"
                    />
                  </div>
                </div>
                <div className="my-6 flex flex-col gap-4 mt-10">
                  {paper_data.data.map(paper => (
                      <DashboardItem
                        key={paper.uuid}
                        icon="healthicons:i-certificate-paper"
                        title={paper.paper_type}
                        onDelete={() => setPaperToDelete(paper)}
                        onEdit={() => showPaper(paper)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
    </DashboardLayout>
  );
};

export default Papers;
