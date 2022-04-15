import { Icon } from "@iconify/react"
import Container from "@/components/Container"
import Friend from "@/components/Friend"
import DashboardLayout from "@/layouts/DashboardLayout"
import TextArea from "@/components/basics/Textarea"
import Typo from "@/components/basics/Typo"
import Modal from "@/components/Modal"
import { useCallback, useEffect, useState } from "react"
import Button from "@/components/Button"
import Input from "@/components/basics/Input"
import { ApplicationDispatch, ApplicationState, Student } from "@/store/types"
import { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux"
import { getStudentsEffect } from "@/store/effects"
import toast from "react-hot-toast"
import { wrapper } from "@/store/store"
import { useLoginChecker } from "@/utils/hooks"
import { handleImages } from "@/utils/common"

const Students:NextPage = ():JSX.Element =>{

    // Const
    const initialInputForm = {
        to: "",
        message: "",
        specificDate: "",
        file: ""
    }

    //States
    const [showModal, setShowModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [inputForm, setInputForm] = useState(initialInputForm)
    const [studentToShow, setStudentToShow] = useState<Student | null>(null)

    // Hooks
    const dispatch:ApplicationDispatch = useDispatch()
    useLoginChecker(true)

    // Store
    const {student: {student_data: {data}}} = useSelector((state:ApplicationState) => state)

    // Functions
    const closeModal = () => {
        setShowModal(false)
        setStudentToShow(null)
    }
    const openModal = (student:(Student|null)) => setShowModal(true)
    
    const handleInputChange = (e:any):void => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value,
        })
    }


    const fetchData = useCallback(() => {
        dispatch(getStudentsEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added"
            },
            failCb: ():void => {
                toast.error("Something went wrong!")
            },
            successCb: ():void => {
                
            },
            setLoading: setLoading
        }))
    }, [dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {(showModal || !!studentToShow) && (
                <Modal handleClose={closeModal} type={"dropIn"} className="max-w-xl">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>Send a message</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                        <Input name="specificDate" label="Send on a specific date" value={inputForm.specificDate} onChange={handleInputChange} type={"datetime-local"} className="mb-4" />
                        {/* <Typo type="small" className="font-semibold">Attachement</Typo>
                        <Input type={"file"} className="mb-4"
                        onChange={(e) =>
                            handleImages(
                            {
                                target: {
                                files: [e.target.files?.[0]],
                                },
                            },
                            (data: string) => {
                                setInputForm((state) => ({
                                ...state,
                                file: data,
                                }));
                            }
                            )
                        }
          /> */}
                        <Typo type="small" className="font-semibold">To</Typo>
                        <p className="mb-4 font-semibold bg-gray-100 p-4 rounded-md">{studentToShow ? studentToShow?.first_name : "Everyone"}</p>
                        <div className="flex flex-col">
                        <Typo type="small" className="font-semibold">Message</Typo>
                                <TextArea  name="message" className="w-full" style={{minHeight: 150}} value={inputForm.message} onChange={handleInputChange} />
                        </div>
                        <Button className="w-full mt-6">Send</Button>
                    </div>
                </div>
                </Modal>
                )}
                <div className="max-w-6xl mx-auto w-full gap-4">
                    <div className="my-8 col-span-3 px-4">
                        <div>
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl">Recent students</h2>
                                <a href="/administartion/students">Actions</a>
                            </div>
                            <div className="my-4">
                                <div className="flex gap-2 items-center intent py-0 shadow-sm">
                                    <Icon icon="akar-icons:search" />
                                    <input type="text" className="border-none bg-transparent outline-none flex-grow py-3" />
                                </div>
                            </div>
                            <button className="intent bg-green-500 text-white font-semibold mt-4 h-10" onClick={() => openModal(null)}>Send a message to every student</button>
                            <div className="my-6 grid grid-cols-4 gap-4 mt-10">
                                {data.map(item => (
                                    <Friend key={item?.uuid} friend={item} setStudentToSendMessage={(student:Student) => setStudentToShow(student)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
Students.getInitialProps = wrapper.getInitialPageProps(store => async ({req, query}) => {
    //@ts-ignore
    await store.dispatch(getStudentsEffect({
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
  })

export default Students