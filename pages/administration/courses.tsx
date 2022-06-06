import { useState } from "react"
import Input from "@/components/basics/Input"
import Button from "@/components/Button"
import Container from "@/components/Container"
import { Icon } from "@iconify/react"
import DashboardItem from "@/components/DashboardItem"
import Modal from "@/components/Modal"
import DashboardLayout from "@/layouts/DashboardLayout"
import { useLoginChecker } from "@/utils/hooks"

const Courses = () =>{

    // States
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    //Hooks
    useLoginChecker(true)

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {showModal && (
                <Modal handleClose={closeModal} type={"dropIn"}>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>Add a course</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <div className="flex flex-col gap-4">
                                    <Input label="Title" />
                                    <Input label="PDF file" />
                                    <Button onClick={closeModal}>Save</Button>
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
                                <h2 className="text-2xl">Courses</h2>
                                <div className="flex gap-5">
                                    <button className="intent shadow-sm" onClick={openModal}>
                                        <Icon icon="akar-icons:plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="flex gap-2 items-center intent py-0 shadow-sm">
                                    <Icon icon="akar-icons:search" />
                                    <input type="text" className="border-none bg-transparent outline-none flex-grow py-3" />
                                </div>
                            </div>
                            <div className="my-6 flex flex-col gap-4 mt-10">
                                <DashboardItem icon="ant-design:book-filled" title="Test du livre" />
                                <DashboardItem icon="ant-design:book-filled" title="Test des livres" />
                                <DashboardItem icon="ant-design:book-filled" title="Livre de tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Courses