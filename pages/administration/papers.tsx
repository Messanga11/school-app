import { Icon } from "@iconify/react"
import DashboardItem from "../../components/DashboardItem"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"
import { Fragment, useState } from "react"
import Input from "@/components/basics/Input"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import Container from "@/components/Container"
import InputCheckbox from "@/components/basics/InputCheckbox"
import Typo from "@/components/basics/Typo"
import InputImage from "@/components/basics/InputImage"
import TextArea from "@/components/basics/Textarea"

const Students = () =>{

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const [questionTypeImage, setQuestionTypeImage] = useState(true)
    const [answerTypeImage, setAnswerTypeImage] = useState(false)
    const [subject, setSubject] = useState("")

    const changeAnswerType = () => setAnswerTypeImage(!answerTypeImage)
    const changeQuestionType = () => setQuestionTypeImage(!questionTypeImage)

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {showModal && (
                <Modal handleClose={closeModal} type={"dropIn"}>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>Add a paper</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">

                        <div className="flex flex-col">
                        <Typo type="small" className="font-semibold">Subject</Typo>
                                <Input type={"text"} />
                        </div>
                        <div className="flex flex-col">
                        <Typo type="small" className="font-semibold">Year</Typo>
                                <Input type={"text"} />
                        </div>
                        <div className="flex flex-col">
                        <Typo type="small" className="font-semibold">Papers</Typo>
                                    <select className="rounded-sm bg-transparent border h-10 text-black" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                        <option value="Maths">Paper 1</option>
                                        <option value="English">Paper 2</option>
                                        <option value="French">Paper 3</option>
                                    </select>
                        </div>
                            <div>
                                <div className="flex flex-col gap-4">
                                    <Typo type='small' className="font-semibold">For</Typo>
                                    <InputCheckbox label="GCE Advanced level Grammar" />
                                    <InputCheckbox label="GCE Advanced level Commercial" />
                                    <InputCheckbox label="GCE Ordinary level Grammar" />
                                    <InputCheckbox label="GCE Ordinary level Commercial" />

                                    <Typo type='small' className="font-semibold mt-4">Questions</Typo>
                                    <InputCheckbox id="questionIsAnImage" onClick={changeQuestionType} checked={questionTypeImage} label="Question is an image" />
                                    {!questionTypeImage ? (
                                        <Input label="Text to display" className="flex-grow" />
                                        ) : (
                                            <Fragment>
                                            <Typo type='small'>Image</Typo>
                                            <InputImage field={{
                                                name: "image"
                                            }} />
                                        </Fragment>
                                    )}
                                    <InputCheckbox id="answerIsAnImage" onClick={changeAnswerType} checked={answerTypeImage} label="Answer is an image" />
                                    <Typo type='small'>Answers</Typo>
                                    {!answerTypeImage ? (
                                        <div className="border rounded-md p-4">
                                            <div className="flex flex-col gap-4">
                                                <Input label="Letter or number" className="w-28" />
                                                <TextArea className="flex-grow p-2" />
                                            </div>
                                            <Button className="mt-4 h-10 w-full" onClick={closeModal}>Add</Button>
                                        </div>
                                    ) : (
                                        <InputImage field={{
                                            name: "image",
											placeholder: "Add an image or a PDF"
                                        }} />
                                    )}

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
                                    <input type="text" className="border-none bg-transparent outline-none flex-grow py-3" />
                                </div>
                            </div>
                            <div className="my-6 flex flex-col gap-4 mt-10">
                                <DashboardItem icon="healthicons:i-certificate-paper" title="Test du livre" />
                                <DashboardItem icon="healthicons:i-certificate-paper" title="Test des livres" />
                                <DashboardItem icon="healthicons:i-certificate-paper" title="Livre de tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Students
