import { Icon } from "@iconify/react"
import Container from "@/components/Container"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"
import TextArea from "@/components/basics/Textarea"
import Typo from "@/components/basics/Typo"
import Modal from "@/components/Modal"
import { useState } from "react"
import { Student } from "@/store/ResponseTypes"
import Button from "@/components/Button"
import Input from "@/components/basics/Input"

const Students = () =>{
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = (student:Student) => setShowModal(true)
    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {showModal && (
                <Modal handleClose={closeModal} type={"dropIn"}>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>Send a message</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                        <Typo type="small" className="font-semibold">Send on a specific date</Typo>
                        <Input type={"datetime-local"} className="mb-4" />
                        <Typo type="small" className="font-semibold">Attachement</Typo>
                        <Input type={"file"} className="mb-4" />
                        <Typo type="small" className="font-semibold">To</Typo>
                        <p className="mb-4 font-semibold bg-gray-100 p-4 rounded-md">Paul Messnga</p>
                        <div className="flex flex-col">
                        <Typo type="small" className="font-semibold">Message</Typo>
                                <TextArea />
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
                            <button className="intent bg-green-500 text-white font-semibold mt-4 h-10">Send a message to every student</button>
                            <div className="my-6 flex flex-col gap-4 mt-10">
                                <Friend friend={{firstname: "Paul", lastname: "Messanga"}} setStudentToSendMessage={openModal} />
                                <Friend friend={{firstname: "Victor", lastname: "Zakaev"}} />
                                <Friend friend={{firstname: "John", lastname: "Snow"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Students