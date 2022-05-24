import LoadingComponent from "@/components/LodingComponent"
import { getPapersEffect } from "@/store/effects/paper"
import { ApplicationState } from "@/store/types"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "../../../../components/Container"
import PastQuestionItem from "../../../../components/PastQuestionItem"
import DashboardLayout from "../../../../layouts/DashboardLayout"

const PastQuestions = () => {

    // Hooks
    const dispatch = useDispatch()
    
    // Stores
    const { paper: {paper_data} } = useSelector((state:ApplicationState) => state)

    // States
    const [loading, setLoading] = useState(false)

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
            <Container className="flex flex-col h-full">
                {loading && (
                    <LoadingComponent />
                )}
                {!loading && paper_data.data.length !== 0 && (
                    <h2 className="mb-8">Past questions</h2>
                )}
                
                {!loading && paper_data.data.length === 0 && (
                    <p className="text-center">No paper at now</p>
                )}
                <div>
                    <div>
                        {!loading && paper_data.data.length !== 0 && <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
                        {paper_data.data.map(paper => (
                            <PastQuestionItem
                                key={paper.uuid}
                                paper={paper}
                            />
                        ))}
                        </div>}
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default PastQuestions