import { useState } from "react"
import Button from "@/components/basics/Button"
import Input from "@/components/basics/Input"
import Modal from "@/components/Modal"
import { Icon } from "@iconify/react"
import Container from "@/components/Container"
import DashboardItem from "../../components/DashboardItem"
import DashboardLayout from "../../layouts/DashboardLayout"
import Select from "@/components/basics/Select"
import Typo from "@/components/basics/Typo"
import InputCheckbox from "@/components/basics/InputCheckbox"

const Students = () =>{

    const [topics, setTopics] = useState([{}])

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
        console.log(e.target.value)
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
                                    <h2>Add Subject</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <div className="flex flex-col gap-4">
                                    <Input label="Title" />
                            <div>
                                <Typo type="small" className="font-semibold">Visible for</Typo>
                                <InputCheckbox  name="alg" checked={form.alg} onClick={handleChange} label="GCE Advanced level Grammar" />
                                <InputCheckbox name="alc" checked={form.alc}  onClick={handleChange} label="GCE Advanced level Commercial" />
                                <InputCheckbox name="olg" checked={form.olg}  onClick={handleChange} label="GCE Ordinary level Grammar" />
                                <InputCheckbox name="olc" checked={form.olc}  onClick={handleChange} label="GCE Ordinary level Commercial" />
                            </div>
                                    <div>
                                        <small className="text-sm font-semibold">Topics</small>
                                        <div className="my-3">
                                            {topics?.map((topic, i) => (
                                                <DashboardItem size="sm" icon="uis:subject" title="subject" key={`topics_${i}`} />
                                            ))}
                                        </div>
                                       <div className="flex flex-col border rounded-md p-4 my-4 gap-4">
                                       <Typo type="small" className="font-semibold">Add a topic</Typo>
                                       <div className="">
                                       <Typo type="small">Title</Typo>
                                            <Input className="flex-grow" />
                                        </div>
                                       <div className="">
                                       <Typo type="small">Notes</Typo>
                                            <Input type="file" className="flex-grow" />
                                        </div>
                                       <div className="">
                                       <Typo type="small">Books</Typo>
                                            <Input type="file" className="flex-grow" />
                                        </div>
                                       <div className="">
                                       <Typo type="small">Library books</Typo>
                                            <Input type="file" className="flex-grow" />
                                        </div>
                                       <div className="">
                                       <Typo type="small">Videos</Typo>
                                            <Input type="file" className="flex-grow" />
                                        </div>
                                        <div className="flex flex-col">
                                       <Typo type="small">Visible for</Typo>
                                        <select className="rounded-sm bg-transparent border h-10 text-black" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                                    <option value="Maths">GCE Advanced level Grammar</option>
                                                    <option value="English">GCE Advanced level Commercial</option>
                                                    <option value="French">GCE Ordinary level Grammar</option>
                                                    <option value="Sciences">GCE Ordinary level Commercial</option>
                                                </select>
                                        </div>
                                            <Button className="text-center"><span>Add</span></Button>
                                    </div>
                                       </div>
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
                                <h2 className="text-2xl">Subjects</h2>
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
                                <DashboardItem icon="uis:subject" title="Test du livre" />
                                <DashboardItem icon="uis:subject" title="Test des livres" />
                                <DashboardItem icon="uis:subject" title="Livre de tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Students