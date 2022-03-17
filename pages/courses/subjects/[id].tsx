import { Icon } from "@iconify/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import SubjectListItem from "../../../components/SubjectListItem"
import DashboardLayout from "../../../layouts/DashboardLayout"

const SubjectDetails = () => {

    const [topicToShow, setTopicToShow] = useState(null)
    const [activeCat, setActiveCat] = useState(0)

    const router = useRouter()

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

    const fetchData = () => {

    }

    useEffect(() => {
      fetchData()
    }, [activeCat])
    

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
                        <SubjectListItem />
                        <SubjectListItem />
                        <SubjectListItem />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )

}

export default SubjectDetails