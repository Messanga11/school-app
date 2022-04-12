import { getTopicsEffect } from "@/store/effects/topic"
import { ApplicationState } from "@/store/types"
import { Icon } from "@iconify/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import SubjectListItem from "../../../components/SubjectListItem"
import DashboardLayout from "../../../layouts/DashboardLayout"

const SubjectDetails = () => {
    
    // Hooks
    const router = useRouter()
    const dispatch = useDispatch()
    
    // Params
    const subject_uuid = router.query?.["id"] as string

    // Store
    const { topic: {
        topic_data
    } } = useSelector((state:ApplicationState) => state)

    // States
    const [topicToShow, setTopicToShow] = useState(null)
    const [activeCat, setActiveCat] = useState(0)
    const [loading, setLoading] = useState(false)



    const topics = [
        {
            name: "Books",
            link: "/profile"
        },
        {
            name: "Videos",
            link: "/profile"
        },
        {
            name: "Past questions",
            link: "/profile"
        },
    ]

    const fetchTopics = ():void => {
        dispatch(getTopicsEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added",
                subject_uuid
            },
            failCb: ():void => {
                
            },
            successCb: ():void => {
                
            },
            setLoading: () => undefined
        }))
    }

    useEffect(() => {
        fetchTopics()
        // eslint-disable-next-line
    }, [])
    

    return (
        <DashboardLayout>
            <div className="flex h-full">
                <div className="flex-grow">
                    <div className="w-full border-b flex items-center justify-between">
                        <h2 className="p-4">Topics</h2>
                        <div className="flex items-center gap-4 mr-4">
                            <Button onClick={() => router.push("/courses/subjects/books")}>Books</Button>
                            <Button onClick={() => router.push("/courses/subjects/videos")}>Video</Button>
                            <Button onClick={() => router.push("/courses/subjects/past-questions")}>Past questions</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 w-full">
                        {!loading && topic_data.data.length === 0 && (
                            <p className="text-center">No topic at now</p>
                        )}
                        {topic_data.data.map(topic => (
                            <SubjectListItem key={topic?.uuid} item={topic} />
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )

}

export default SubjectDetails