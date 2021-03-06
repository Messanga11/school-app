import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useCallback, useEffect, useState } from "react"
import Button from "@/components/basics/Button"
import Input from "@/components/basics/Input"
import Modal from "@/components/Modal"
import { Icon } from "@iconify/react"
import Container from "@/components/Container"
import DashboardItem from "../../components/DashboardItem"
import DashboardLayout from "../../layouts/DashboardLayout"
import SelectComponent from "@/components/basics/Select"
import Typo from "@/components/basics/Typo"
import InputCheckbox from "@/components/basics/InputCheckbox"
import { NextPage } from "next"
import { ApplicationState, Book, BookRequest, FileRequest, Subject, SubjectRequest, Topic, TopicRequest, Video, VideoRequest } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import { createSubjectEffect, deleteSubjectEffect, getSubjectsEffect, updateSubjectEffect } from "@/store/effects/subject"
import toast from "react-hot-toast"
import { getVideosEffect } from "@/store/effects/video"
import { wrapper } from "@/store/store"
import { createTopicEffect, deleteTopicEffect, getTopicsEffect, updateTopicEffect } from "@/store/effects/topic"
import { handleImages } from "@/utils/common"
import { createBookEffect, deleteBookEffect, getBooksEffect } from "@/store/effects/book"
import TopicInput from "@/components/TopicInput"
import TopicFilesComponent from "@/components/TopicFilesComponent"
import DeleteModal from "@/components/DeleteModal"
import { getBooks, getTopics } from "@/store/actions"
import Loading from "@/components/basics/Loading"
import { useLoginChecker, useSearch } from "@/utils/hooks"
import LoadingComponent from "@/components/LodingComponent"
import { apiPrefix } from "@/services/urls"
import { uploadFormDataWithFile } from '../../utils/hooks';
import Tabs from "@/components/basics/Tabs"
import LoadingComp from "@/components/LoadingComp"

// Interfaces
interface InputFormType {
    subject_title: string,
    current_topic_title: string,
    current_note_title: string,
    current_book_title: string,
    current_lib_book_title: string,
    current_video_title: string,
    topics: TopicRequest[]
}

const Subjects: NextPage = () => {

    // Const
    const initialForm = {
        alg: false,
        alc: false,
        olg: false,
        olc: false,
    }
    const initialInputForm: InputFormType = {
        subject_title: "",
        current_topic_title: "",
        current_book_title: "",
        current_lib_book_title: "",
        current_note_title: "",
        current_video_title: "",
        topics: []
    }

    const initialFileForm = {
        note: "",
        book: "",
        video: "",
        video_vip: ""
    }


    const tabs = [
        {
          id: "olg",
          title: "OLG",
        },
        {
          id: "alg",
          title: "ALG",
        },
        {
          id: "olc",
          title: "OLC",
        },
        {
          id: "alc",
          title: "ALC",
        },
      ]

    // Hooks
    const dispatch = useDispatch()
    useLoginChecker(true)


    // Store
    const { subject: { subject_data }, topic: { topic_data }, book: { book_data } } = useSelector((state: ApplicationState) => state)

    // States
    const [subjectToShow, setSubjectToShow] = useState<Subject | null>(null)
    const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [subject, setSubject] = useState<string>("")
    const [form, setForm] = useState<typeof initialForm>(initialForm)
    const [inputForm, setInputForm] = useState<typeof initialInputForm>(initialInputForm)
    const [filesForm, setFilesForm] = useState(initialFileForm)
    const [loading, setLoading] = useState<boolean>(false)
    const [openState, setOpenState] = useState<number>(1)
    const [notes, setNotes] = useState<BookRequest[]>([])
    const [books, setBooks] = useState<BookRequest[]>([])
    const [libBooks, setLibBooks] = useState<BookRequest[]>([])
    const [videos, setVideos] = useState<VideoRequest[]>([])
    const [topicToShow, setTopicToShow] = useState<Topic | null>(null)
    const [topicToDelete, setTopicToDelete] = useState<Topic | null>(null)
    const [fileDelete, setFileDelete] = useState<FileRequest | null>(null)
    const [createdSubject, setCreatedSubject] = useState<Subject | null>(null)
    const [fileToDelete, setFileToDelete] = useState<Book | null>(null)
    const [activeTabId, setActiveTabId] = useState(tabs[0].id)
    const [inputSearchValue, setInputSearchValue] = useState<string>("")

    // Functions
    const resetState = (): void => {
        setSubjectToShow(null)
        setShowModal(false)
        setSubject("")
        setForm(initialForm)
        setInputForm(initialInputForm)
        setLoading(false)
        setOpenState(1)
        setNotes([])
        setBooks([])
        setLibBooks([])
        setVideos([])
        dispatch(getBooks({ data: [] }))
        dispatch(getTopics({ data: [] }))
    }

    const closeModal = (): void => {
        resetState()
    }

    const openModal = (): void => {
        resetState()
        setShowModal(true)
    }

    const deleteItemFromArrayState = (setState: Dispatch<SetStateAction<any[]>>, indexOnArray: number): void => {
        setState((state) => state.filter((item, i) => i !== indexOnArray))
    }

    const showSubject = (subject: Subject): void => setSubjectToShow(subject)

    const saveTopic = (): void => {
        if (!inputForm.current_topic_title) {
            toast.error("Topic title is required")
            return
        }
        const payload: TopicRequest = {
            uuid: topicToShow?.uuid,
            title: inputForm?.current_topic_title,
            visible_for: createdSubject?.visible_for || "",
            subject_uuid: createdSubject?.uuid || ""
        }

        dispatch((topicToShow ? updateTopicEffect : createTopicEffect)({
            setLoading,
            failCb: () => toast.error("Somethingwent wrong!"),
            successCb: (topic: Topic) => {
                toast.success("Topic created")
                fetchTopics()
            },
            payload
        }))
        setInputForm({
            ...inputForm,
            current_topic_title: ""
        })
        setNotes([])
        setLibBooks([])
        setBooks([])
        setVideos([])
    }

    const handleChange = (e: any): void => {
        setForm((state: typeof initialForm) => {
            Object.keys(state).forEach((key) => {
                // @ts-ignore
                state[key] = false
            })
            return ({
                ...state,
                [e.target.name]: e.target.checked
            })
        })
    }

    const handleInputChange = (e: any): void => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value,
        })
    }

    const fetchFiles = useCallback((): void => {
        dispatch(getBooksEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added"
            },
            failCb: (): void => {

            },
            successCb: (): void => {

            },
            setLoading: () => undefined
        }))
    }, [dispatch])

    const createFile = (key: string) => {

        // @ts-ignore
        if (!inputForm[`current_${key}_title`] || !filesForm[key]) {
            return toast.error("Make sure to provide file and title")
        }

        const payload: FileRequest = {
            // @ts-ignore
            title: inputForm[`current_${key}_title`],
            type: key,
            //@ts-ignore
            file: filesForm[key],
            topic_uuid: topicToShow?.uuid || ""
        }
        uploadFormDataWithFile({
            setLoading,
            payload,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success("Item created")
                fetchFiles()
                setInputForm(state => ({
                    ...state,
                    [`current_${key}_title`]: ""
                }))
                setFilesForm(state => ({
                    ...state,
                    [key]: ""
                }))
            }
        })
    }

    const fetchSubjects = useCallback((): void => {
        dispatch(getSubjectsEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added",
                type: activeTabId
            },
            failCb: (): void => {

            },
            successCb: (): void => {

            },
            setLoading: () => undefined
        }))
    }, [dispatch, activeTabId])
    useSearch(fetchSubjects, [inputSearchValue])

    const fetchTopics = (data?:Subject): void => {
        dispatch(getTopicsEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added",
                subject_uuid: (data || createdSubject || subjectToShow)?.uuid
            },
            failCb: (): void => {

            },
            successCb: (): void => {

            },
            setLoading: () => undefined
        }))
    }


    const saveSubject = () => {

        if (!inputForm.subject_title) {
            return toast.error("Please fill in subject title")
        }
        
        if (!Object.values(form).includes(true)) {
                return toast.error("Please select a GCE Visibility")
        }

        const payload: SubjectRequest = {
            uuid: subjectToShow?.uuid,
            title: inputForm.subject_title,
            visible_for: Object.keys(form)!.find((key): boolean =>
                // @ts-ignore
                Boolean(form[key]) === true) as string
        }
        dispatch((subjectToShow ? updateSubjectEffect : createSubjectEffect)({
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: Subject) => {
                toast.success(`Subject ${subjectToShow ? "updated" : "created"}`)
                fetchSubjects()
                setCreatedSubject(data)
                if (subjectToShow) {
                    setSubjectToShow(data)
                }
                setOpenState(2)
                fetchTopics(data)
            },
            payload,
        }))
    }

    const openEditSubject = (subject: Subject) => {
        showSubject(subject)
        setInputForm({
            ...inputForm,
            subject_title: subject?.title,
        })
        setForm(state => {
            const newState: any = { ...state }
            Object.keys(state).forEach((key) => {
                newState[key] = key === subject?.visible_for
            })
            return newState
        })
    }

    const deleteSubject = () => {
        dispatch(deleteSubjectEffect({
            range: subjectToDelete?.uuid,
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success(`Subject deleted`)
                fetchSubjects()
                setSubjectToDelete(null)
            }
        }))
    }

    const deleteTopic = () => {
        dispatch(deleteTopicEffect({
            range: topicToDelete?.uuid,
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success(`Topic deleted`)
                fetchTopics()
                setTopicToDelete(null)
            }
        }))
    }

    const deleteFile = () => {
        dispatch(deleteBookEffect({
            range: fileToDelete?.uuid,
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success(`File deleted`)
                fetchFiles()
                setFileToDelete(null)
            }
        }))
    }

    useEffect(() => {
        fetchSubjects()
    }, [fetchSubjects, activeTabId])

    useEffect(() => {
        resetState()
    // eslint-disable-next-line
    }, [])
    


    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {((subjectToDelete) && (
                    <DeleteModal
                        message={"Do you really want to delete this?"}
                        onAccept={() => deleteSubject()}
                        onDecline={() => setSubjectToDelete(null)}
                    />
                ))}
                {(showModal || subjectToShow) && (
                    <Modal className="max-w-screen-md" handleClose={closeModal} type={"dropIn"}>
                        {((topicToDelete) && (
                            <DeleteModal
                                message={"Do you really want to delete this?"}
                                onAccept={() => deleteTopic()}
                                onDecline={() => setTopicToDelete(null)}
                            />
                        ))}
                        {((fileToDelete) && (
                            <DeleteModal
                                message={"Do you really want to delete this?"}
                                onAccept={() => deleteFile()}
                                onDecline={() => setFileToDelete(null)}
                            />
                        ))}
                        {!loading ? (<div>
                            <div>
                                <div>
                                    <div>
                                        <h2 className="text-black">{subjectToShow ? "Edit" : "Add"} Subject {subjectToShow && `: ${subjectToShow?.title}`}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div>
                                    <div className="flex flex-col gap-4">
                                        {openState === 1 && <div>
                                            <Input name="subject_title" label="Title" value={inputForm.subject_title} onChange={handleInputChange} />
                                            <div className="mt-4">
                                                <Typo type="small" className="text-xs text-black">Visible for</Typo>
                                                <InputCheckbox name="alg" checked={form.alg} onClick={handleChange} label="GCE Advanced level Grammar" />
                                                <InputCheckbox name="alc" checked={form.alc} onClick={handleChange} label="GCE Advanced level Commercial" />
                                                <InputCheckbox name="olg" checked={form.olg} onClick={handleChange} label="GCE Ordinary level Grammar" />
                                                <InputCheckbox name="olc" checked={form.olc} onClick={handleChange} label="GCE Ordinary level Commercial" />
                                            </div>

                                            <Button className="mt-8 w-full" onClick={saveSubject}>{subjectToShow ? "Update" : "Save"}</Button>
                                        </div>
                                        }
                                    </div>
                                    {openState === 2 && <div>
                                        <div>
                                            <small className="text-sm text-black">Topics</small>
                                            <div className="my-3 space-y-2">
                                                {topic_data.data.map((topic, i) => (
                                                    <div key={topic?.uuid}>
                                                        <div className="flex flex-col gap-2">
                                                            {topicToShow?.uuid === topic?.uuid && <Button className="self-end" onClick={() => setTopicToShow(null)}>Close</Button>}
                                                            <DashboardItem
                                                                size="sm" icon="uis:subject"
                                                                title={topic.title}
                                                                key={`topics_${i}`}
                                                                onEdit={() => setTopicToShow(topic)}
                                                                onDelete={() => setTopicToDelete(topic)}
                                                            />
                                                            {topicToShow?.uuid === topic?.uuid && (
                                                                <TopicInput
                                                                    handleInputChange={handleInputChange}
                                                                    value={inputForm.current_topic_title}
                                                                    addFunc={saveTopic}
                                                                    name={"current_topic_title"}
                                                                    isUpdate
                                                                />
                                                            )}
                                                        </div>

                                                        {topicToShow?.uuid === topic?.uuid &&
                                                            Object.keys(initialFileForm)
                                                                .map(key => (
                                                                    <TopicFilesComponent
                                                                        key={key}
                                                                        _key={key}
                                                                        handleInputChange={handleInputChange}
                                                                        libBooks={libBooks}
                                                                        notes={notes}
                                                                        saveFile={createFile}
                                                                        videos={videos}
                                                                        fetchFiles={fetchFiles}
                                                                        setFilesForm={setFilesForm}
                                                                        topicToShow={topicToShow}
                                                                        inputForm={inputForm}
                                                                        setFileToDelete={setFileToDelete}
                                                                    />)
                                                                )
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                            {!topicToShow && (
                                                <TopicInput
                                                    handleInputChange={handleInputChange}
                                                    value={inputForm.current_topic_title}
                                                    addFunc={saveTopic}
                                                    name={"current_topic_title"}
                                                />
                                            )}
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>) : (
                            <LoadingComponent />
                        )}
                    </Modal>
                )}
                <div className="max-w-6xl mx-auto w-full gap-4">
                    <div className="my-8 col-span-3 px-4">
                        <div>
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl text-black mb-8">Subjects</h2>
                                <div className="flex gap-5">
                                    <button className="intent shadow-sm" onClick={openModal}>
                                        <Icon icon="akar-icons:plus" color="black" />
                                    </button>
                                </div>
                            </div>
                            <div className="my-4">
                                <Input value={inputSearchValue} onChange={(e) => setInputSearchValue(e.target.value)} icon={<Icon icon="akar-icons:search" color="black"/>} />
                            </div>
                            <div className="rounded-md bg-white p-6">
                                <Tabs
                                    tabs={tabs}
                                    activeTabId={activeTabId}
                                    setActiveTabId={setActiveTabId}
                                    // count={{2:invitations?.data?.length}}
                                />
                                <div className="my-6 flex flex-col gap-6 mt-16">
                                    <LoadingComp loading={loading} />
                                    {!loading && subject_data.data.filter(subject => subject.visible_for === activeTabId).length === 0 && (
                                        <p>No subject at now</p>
                                    )}
                                    {subject_data.data.filter(subject => subject.visible_for === activeTabId).map(subject => (
                                        <DashboardItem
                                            key={subject?.uuid}
                                            onEdit={() => openEditSubject(subject)} icon="uis:subject" title={subject.title}
                                            onDelete={() => setSubjectToDelete(subject)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

Subjects.getInitialProps = wrapper.getInitialPageProps(store => async ({ req, query }) => {
    //@ts-ignore
    await store.dispatch(getSubjectsEffect({
        range: {
            page: 1,
            per_page: 10,
            order_field: "date_added"
        },
        failCb: (): void => {

        },
        successCb: (): void => {

        },
        setLoading: () => undefined
    }))
})

export default Subjects