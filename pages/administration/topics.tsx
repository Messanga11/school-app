import { useState } from "react"
import Input from "@/components/basics/Input"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import Container from "@/components/Container"
import { Icon } from "@iconify/react"
import DashboardItem from "../../components/DashboardItem"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"
import Typo from "@/components/basics/Typo"
import InputCheckbox from "@/components/basics/InputCheckbox"
import Select from "@/components/basics/Select"
import { EditSharp } from "@mui/icons-material"

const Students = () =>{

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)
    const [subject, setSubject] = useState("")

    const [form, setForm] = useState(
        {
            alg: false,
            alc: false,
            olg: false,
            olc: false,
        }
    )

    const handleChange = (e) => {
        setForm(state => {
            Object.keys(state).forEach(key => {
                state[key] = false
            })
            return ({
            ...state,
            [e.target.name]: e.target.checked
        })})
    }

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                {showModal && (
                <Modal handleClose={closeModal} type={"dropIn"}>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>Add a topic</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <div className="flex flex-col gap-4">
                                    <Input label="Title" />
                                    <Typo type="small" className="font-semibold">PDF</Typo>
                                    <Input type="file" />
                                    <Typo type="small" className="font-semibold">Video</Typo>
                                    <Input type="file" />
                                    <Typo type="small" className="font-semibold">Subject</Typo>
                                    <select className="rounded-sm bg-transparent border h-10 text-black" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                        <option value="Maths">Maths</option>
                                        <option value="English">English</option>
                                        <option value="French">French</option>
                                        <option value="Sciences">Sciences</option>
                                    </select>
                                    <Typo type="small" className="font-semibold">Visible for</Typo>
                                    <InputCheckbox  name="alg" checked={form.alg} onClick={handleChange} label="GCE Advanced level Grammar" />
                                    <InputCheckbox name="alc" checked={form.alc}  onClick={handleChange} label="GCE Advanced level Commercial" />
                                    <InputCheckbox name="olg" checked={form.olg}  onClick={handleChange} label="GCE Ordinary level Grammar" />
                                    <InputCheckbox name="olc" checked={form.olc}  onClick={handleChange} label="GCE Ordinary level Commercial" />
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
                                <h2 className="text-2xl">Topics</h2>
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
                                <DashboardItem icon="ic:baseline-topic" title="Test du livre" />
                                <DashboardItem icon="ic:baseline-topic" title="Test des livres" />
                                <DashboardItem icon="ic:baseline-topic" title="Livre de tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Students
