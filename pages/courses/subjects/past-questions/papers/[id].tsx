import { Icon } from "@iconify/react"
import { Box, Modal } from "@mui/material"
import { FormEventHandler, useCallback, useEffect, useState } from "react"
import Button from "../../../../../components/basics/Button"
import Container from "../../../../../components/Container"
import PastQuestionItem from "../../../../../components/PastQuestionItem"
import DashboardLayout from "../../../../../layouts/DashboardLayout"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState, Paper } from "@/store/types"
import { getPapersEffect } from "@/store/effects/paper"
import { validatePaperEffect } from '../../../../../store/effects/paper';
import { QuestionValidate } from '../../../../../store/types/Paper';
import toast from "react-hot-toast"

const Papers = () => {

    // Hooks
    const dispatch = useDispatch()
    
    // Stores
    const { paper: {paper_data} } = useSelector((state:ApplicationState) => state)

    // States
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingValidate, setLoadingValidate] = useState<boolean>(false)
    const [paperToShow, setPaperToShow] = useState<Paper | null>(null)
    const [started, setStarted] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [showCorrectAnswers, setShowCorrectAnswers] = useState<boolean>(false)
    const [answers, setAnswers] = useState<any>({})
    const [serverAnswers, setServerAnswers] = useState<any>(null)
    const [userAnswers, setUserAnswers] = useState<any>([])

    // Functions
    const resetStates = () => {
        setStarted(false)
        setSubmitted(false)
        setShowCorrectAnswers(false)
    }

    const closeFunc = () => {
        resetStates()
        setPaperToShow(null)
    }

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
            setLoading
        }))
    }, [dispatch])

    const validatePaper= (e:any) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const values = Object.fromEntries(data.entries())
        const valuesSorted = Object.keys(values).sort((key1, key2) => parseInt(key1) > parseInt(key2) ? -1 : 1).map((key) => values[key])
        const payload:QuestionValidate = {
            paper_uuid: paperToShow?.uuid || "",
            // @ts-ignore
            answers: valuesSorted
        }
        dispatch(
            validatePaperEffect(
                {
                    setLoading: setLoadingValidate,
                    failCb: ():void => {
                        toast.error("We are not able to submit your answers")
                    },
                    successCb: (data:any):void => {
                        setSubmitted(true)
                        setStarted(false)
                        setUserAnswers(valuesSorted || [])
                        setServerAnswers(data)
                    },
                    payload
                }
            )
        )
    }

    useEffect(() => {
        fetchPapers()
    }, [fetchPapers])

    return (
        <DashboardLayout>

            <Modal className="flex justify-center items-center" open={!!paperToShow} onClose={closeFunc}>
                <Box className='max-w-screen-md w-full'>
                    <div className="w-full mx-auto bg-white text-black rounded-md p-6 max-h-screen overflow-y-auto">
                        <h2 id="parent-modal-title">{started ? 'You are passing paper 1' : submitted ? 'You have passed paper 1' : "You will pass paper 1"}</h2>
                        <p id="parent-modal-description">
                        {started ? 'Write the answer you think is correct' : submitted ? 'Check your result' : "Ready for a test ?"}
                        </p>
                        <form className="my-4" onSubmit={validatePaper}>
                            <div style={{display: (started && !submitted) ? "block" : "none"}}>
                                {paperToShow?.questions?.map((question, i) => (
                                    <div key={question?.uuid} className="mt-4 border rounded-md p-4">
                                        {question?.is_an_image ? (
                                            <div className="h-screen w-full relative mb-8">
                                                <Image layout="fill" className="absolute h-full w-full object-contain" src={question?.image || ""} alt="" />
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className="flex-grow">
                                                    <small className="font-bold">Question {i+1}</small>
                                                    <p>{question?.text}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            {question.answers?.map((answer, j) => (
                                                <p key={answer?.uuid}>{j+1}) {answer?.is_an_image ?  (
                                                    <img src={answer?.image} alt="" />
                                                ) : answer?.text}</p>
                                            ))}
                                            <div>
                                                <small>Your answer</small>
                                                {question.answers?.map((answer, k) => (
                                                    <div className="flex gap-2" key={answer?.uuid}>
                                                        <span id={`label-${answer?.uuid}`}>{k+1}</span>   
                                                        <input type="radio" name={`${i}`} onChange={(e) => {
                                                            setAnswers((state:any) => {
                                                                state[i] = e.target.value
                                                                return {...state}
                                                            })  
                                                        }} value={answer?.uuid} />
                                                    </div>
                                                ))}
                                                {/* <input
                                                    name={i.toString()}
                                                    onChange={(e) => {
                                                    setAnswers((state:any) => {
                                                        state[i] = e.target.value
                                                            return {...state}
                                                        })  
                                                    }}
                                                    type="text"
                                                    className="intent border" /> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            <Button className='w-full mt-8' type="submit" loading={loadingValidate}>Submit</Button>

                            </div>

                            <div style={{display: (submitted) ? "block" : "none"}}>
                                    <div className="flex justify-between">
                                    <div className="flex gap-2 flex-col font-bold text-md">
                                        {userAnswers.map((answer:string, i:number) => (
                                            <div className="flex gap-2 items-center" key={answer}>
                                                <p className={`text-${answer === serverAnswers?.correct_answers?.[i] ? "green" : "red"}-500`}>{i+1})</p>
                                                {showCorrectAnswers && (
                                                    <span>{document.getElementById(`label-${answer}`)?.textContent || ""}</span>
                                                )}
                                                {answer === serverAnswers?.correct_answers?.[i] ?(
                                                    <Icon className="text-green-500" icon="akar-icons:check" />)
                                                    : (
                                                    <Icon className="text-red-500" icon="bi:x-lg" />
                                                )}
                                            </div>    
                                        ))}
                                    </div>

                                    <div className="flex flex-col text-4xl items-center">
                                        <small>Result:</small>
                                        <p>{serverAnswers?.correct_count}</p>
                                        <hr className="w-full" />
                                        <p>{serverAnswers?.correct_answers?.length}</p>
                                    </div>
                                </div>
                                {!showCorrectAnswers && (
                                    <Button className='w-full mt-8' onClick={() =>{
                                        setShowCorrectAnswers(true)
                                    }}>
                                        Show correct answers
                                    </Button>
                                )}
                                </div>
                        </form>
                        <div style={{display: (!submitted && !started) ? "block" : "none" }} className="flex gap-4">
                                <Button className="mx-auto w-full mt-8" onClick={() => setStarted(true)} type="button">Yes</Button>
                                <Button className="mx-auto w-full mt-8 bg-slate-600" onClick={() => closeFunc()} type="button">No</Button>
                            </div>
                    </div>
                </Box>
            </Modal>

            <Container className="flex flex-col h-full">
                <h2 className="mb-8">Papers</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-4 gap-4">
                            {paper_data.data.map(paper => (
                                <PastQuestionItem
                                    key={paper.uuid}
                                    paper={paper}
                                    xl
                                    showType
                                    onClick={() => setPaperToShow(paper)}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Papers