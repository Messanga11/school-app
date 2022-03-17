import { Icon } from "@iconify/react"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import BookItem from "../../../../components/BookItem"
import VideoItem from "../../../../components/VideoItem"
import DashboardLayout from "../../../../layouts/DashboardLayout"

const SubjectDetails = () => {

    const [topicToShow, setTopicToShow] = useState(null)
    const [view, setView] = useState("notes")

    const router = useRouter()

    const nav = [
        {
            id: "notes",
            name: "Notes",
        },
        {
            id: "videos",
            name: "Videos",
        },
    ]

    const fetchData = () => {

    }
    

    return (
        <DashboardLayout>
            <div className="flex h-full">
                <div className="flex-grow">
                    <div className="w-full border-b flex items-center justify-between">
                        <h2 className="p-4">Taxonomy</h2>
                    </div>
                    <div className="flex h-full">
                        <ul className="flex-col border-r">
                            {nav.map(navItem => (
                                <li key={navItem.id} className={`cursor-pointer text-lg font-semibold py-3 hover:bg-slate-200 px-8 ${view === navItem.id  ? 'bg-slate-200' : ""}`} onClick={() => setView(navItem.id)}>{navItem.name}</li>
                            ))}
                        </ul>
                        <div className="flex-grow max-w-3xl mx-auto">
                            <div  className="p-4 grid grid-cols-3 gap-4 w-full">
                                {view === "notes" ? (
                                    <Fragment>
                                        <BookItem />
                                        <BookItem />
                                        <BookItem />
                                        <BookItem />
                                        <BookItem />
                                    </Fragment>
                                ): view === "videos" ? (
                                    <Fragment>
                                        <VideoItem />
                                        <VideoItem />
                                        <VideoItem />
                                        <VideoItem />
                                        <VideoItem />
                                    </Fragment>
                                ): null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )

}

export default SubjectDetails