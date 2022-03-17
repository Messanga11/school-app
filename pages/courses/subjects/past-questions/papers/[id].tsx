import { Icon } from "@iconify/react"
import { Box, Modal } from "@mui/material"
import { useState } from "react"
import Button from "../../../../../components/Button"
import Container from "../../../../../components/Container"
import PastQuestionItem from "../../../../../components/PastQuestionItem"
import DashboardLayout from "../../../../../layouts/DashboardLayout"
import Image from "next/image"

const Papers = () => {

    const [paperToShow, setPaperToShow] = useState(null)
    const [started, setStarted] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)

    const resetStates = () => {
        setStarted(false)
        setSubmitted(false)
        setShowCorrectAnswers(false)
    }

    const closeFunc = () => {
        resetStates()
        setPaperToShow(null)
    }

    return (
        <DashboardLayout>

            <Modal className="flex justify-center items-center" open={!!paperToShow} onClose={closeFunc}>
                <Box className='max-w-xl w-full'>
                    <div className="w-full mx-auto bg-white text-black rounded-md p-6 max-h-screen overflow-y-auto">
                        <h2 id="parent-modal-title">{started ? 'You are passing paper 1' : submitted ? 'You have passed paper 1' : "You will pass paper 1"}</h2>
                        <p id="parent-modal-description">
                        {started ? 'Write the answer you think is correct' : submitted ? 'Check your result' : "Ready for a test ?"}
                        </p>
                        <div className="my-4">
                            {started ? (
                            <div>

                                <div className="h-screen w-full relative mb-8">
                                    <Image layout="fill" className="absolute h-full w-full object-contain" src="https://images.unsplash.com/photo-1587135991058-8816b028691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Paper cover" />
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="flex-grow">
                                        <small className="font-bold">Question 1</small>
                                        <p>What is what ?</p>
                                        <p>A) What</p>
                                        <p>B) Nothing</p>
                                    </div>
                                    <div>
                                        <small>Your answer</small>
                                        <input type="text" className="intent border" />
                                    </div>
                                </div>

                                <Button className='w-full mt-8' onClick={() =>{
                                    setSubmitted(true)
                                    setStarted(false)
                                    }}>Submit</Button>

                            </div>
                            )
                            : submitted ? (
                                <div>
                                    <div className="flex justify-between">
                                    <div className="flex gap-2 flex-col font-bold text-md">
                                        <div className="flex gap-2 items-center">
                                            <p className="text-red-500">1) A</p>
                                            <Icon className="text-red-500" icon="bi:x-lg" />
                                            {showCorrectAnswers && <p className="text-green-500">B</p>}
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <p className="text-green-500">2) A</p>
                                            <Icon className="text-green-500" icon="akar-icons:check" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col text-4xl items-center">
                                        <small>Result:</small>
                                        <p>20</p>
                                        <hr className="w-full" />
                                        <p>50</p>
                                    </div>
                                </div>
                                
                                    {!showCorrectAnswers && <Button className='w-full mt-8' onClick={() =>{
                                        setShowCorrectAnswers(true)
                                        }}>Show correct answers</Button>}

                                </div>
                            )
                            : <div className="flex gap-4">
                                <Button className="mx-auto w-full mt-8" onClick={() => setStarted(true)}>Yes</Button>
                                <Button className="mx-auto w-full mt-8 bg-slate-600" onClick={() => setStarted(true)}>No</Button>
                            </div> }
                        </div>
                    </div>
                </Box>
            </Modal>

            <Container className="flex flex-col justify-center -mt-8 h-full">
                <h2 className="text-center mb-4">Papers</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-3 gap-4">
                            <PastQuestionItem xl text={"Paper 1"} onClick={() => setPaperToShow("paper1")} />
                            <PastQuestionItem xl text={"Paper 2"} onClick={() => setPaperToShow("paper1")} />
                            <PastQuestionItem xl text={"Paper 3"} onClick={() => setPaperToShow("paper1")} />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Papers