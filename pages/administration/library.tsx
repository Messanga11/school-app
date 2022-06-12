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
import { useLoginChecker } from "@/utils/hooks"
import LoadingComponent from "@/components/LodingComponent"
import { apiPrefix } from "@/services/urls"
import { uploadFormDataWithFile } from '../../utils/hooks';

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
        lib_book: "",
        video: "",
        video_vip: ""
    }

    // Hooks
    const dispatch = useDispatch()
    useLoginChecker(true)
    // Store
    const { subject: { subject_data }, topic: { topic_data }, book: { book_data } } = useSelector((state: ApplicationState) => state)

    // States
    const [FileToShow, setFileToShow] = useState<Book | null>(null)
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

    // Functions
    const resetState = (): void => {
        setShowModal(false)
    }

    const closeModal = (): void => {
        resetState()
    }

    const openModal = (): void => {
        resetState()
        setShowModal(true)
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
            topic_uuid: "nothing"
        }
        uploadFormDataWithFile({
            setLoading,
            payload,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success("Item created")
                dispatch(getBooksEffect({
                    setLoading,
                    failCb: () => toast.error("Something went wrong!"),
                    successCb: (data: any) => {
                        fetchFiles()
                    },
                    payload,
                }))
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
                order_field: "date_added"
            },
            failCb: (): void => {

            },
            successCb: (): void => {

            },
            setLoading: () => undefined
        }))
    }, [dispatch])

    const deleteSubject = () => {
        dispatch(deleteSubjectEffect({
            range: fileToDelete?.uuid,
            setLoading,
            failCb: () => toast.error("Something went wrong!"),
            successCb: (data: any) => {
                toast.success(`Subject deleted`)
                fetchSubjects()
                setFileToDelete(null)
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
        fetchFiles()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        resetState()
    // eslint-disable-next-line
    }, [])
    


    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {((fileToDelete) && (
                    <DeleteModal
                        message={"Do you really want to delete this?"}
                        onAccept={() => deleteFile()}
                        onDecline={() => setFileToDelete(null)}
                    />
                ))}
                {(showModal || FileToShow) && (
                    <Modal className="max-w-screen-md" handleClose={closeModal} type={"dropIn"}>
                       <TopicFilesComponent
                            _key={"lib_book"}
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
                            hideData
                        />)
                    </Modal>
                )}
                <div className="max-w-6xl mx-auto w-full gap-4">
                    <div className="my-8 col-span-3 px-4">
                        <div>
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl text-black mb-8">Library books</h2>
                                <div className="flex gap-5">
                                    <button className="intent shadow-sm" onClick={openModal}>
                                        <Icon icon="akar-icons:plus" color="black" />
                                    </button>
                                </div>
                            </div>
                            <div className="my-4">
                                <Input icon={<Icon icon="akar-icons:search" color="black" />} />
                            </div>
                            <div className="my-6 flex flex-col gap-6 mt-16">
                                {book_data.data.filter(book => book.type === "lib_book").map(book => (
                                    <DashboardItem
                                        key={book?.uuid}
                                        title={book.title}
                                        onDelete={() => setFileToDelete(book)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Subjects