import { Icon } from "@iconify/react"
import { Box, Modal } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import Button from "../../../../../components/Button"
import Container from "../../../../../components/Container"
import PastQuestionItem from "../../../../../components/PastQuestionItem"
import DashboardLayout from "../../../../../layouts/DashboardLayout"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState, Paper } from "@/store/types"
import { getPapersEffect } from "@/store/effects/paper"

const Papers = () => {

    // Hooks
    const dispatch = useDispatch()
    
    // Stores
    const { paper: {paper_data} } = useSelector((state:ApplicationState) => state)

    const [loading, setLoading] = useState(false)
    const [paperToShow, setPaperToShow] = useState<Paper | null>(null)
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

    useEffect(() => {
        fetchPapers()
    }, [fetchPapers])

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

                                {paperToShow?.questions?.map((question, i) => (
                                    question?.is_an_image ? (
                                        <div className="h-screen w-full relative mb-8">
                                            <Image layout="fill" className="absolute h-full w-full object-contain" src={question?.image || ""} alt="" />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-4">
                                            <div className="flex-grow">
                                                <small className="font-bold">Question {i+1}</small>
                                                <p>{question?.text}</p>
                                                {question.answers?.map(answer => (
                                                    <p key={answer?.uuid}>{answer?.letter}) {answer?.text}</p>
                                                ))}
                                            </div>
                                            <div>
                                                <small>Your answer</small>
                                                <input type="text" className="intent border" />
                                            </div>
                                        </div>
                                    )
                                ))}

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
                                {!showCorrectAnswers && (
                                    <Button className='w-full mt-8' onClick={() =>{
                                        setShowCorrectAnswers(true)
                                    }}>
                                        Show correct answers
                                    </Button>
                                )}
                                </div>
                            )
                            : (
                                <div className="flex gap-4">
                                    <Button className="mx-auto w-full mt-8" onClick={() => setStarted(true)}>Yes</Button>
                                    <Button className="mx-auto w-full mt-8 bg-slate-600" onClick={() => setStarted(true)}>No</Button>
                                </div>
                            )}
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