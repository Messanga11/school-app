import { getBooksEffect } from "@/store/effects/book"
import { ApplicationState } from "@/store/types"
import { Icon } from "@iconify/react"
import { useRouter } from "next/router"
import { Fragment, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BookItem from "../../../../components/BookItem"
import VideoItem from "../../../../components/VideoItem"
import DashboardLayout from "../../../../layouts/DashboardLayout"

const SubjectDetails = () => {

    // Store
    const { book: {book_data}} = useSelector((state:ApplicationState) => state)

    // States
    const [topicToShow, setTopicToShow] = useState(null)
    const [view, setView] = useState("notes")
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()

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

    const fetchFiles = useCallback(():void => {
        dispatch(getBooksEffect({
            range: {
                page: 1,
                per_page: 10,
                order_field: "date_added"
            },
            failCb: ():void => {
                
            },
            successCb: ():void => {
                
            },
            setLoading: () => undefined
        }))
    }, [dispatch])

    useEffect(() => {
      fetchFiles()
    }, [fetchFiles])
    
    

    return (
        <DashboardLayout>
            <div className="flex h-full">
                <div className="flex-grow">
                    <div className="w-full border-b border-[#eee] flex items-center justify-between">
                        <h2 className="p-4 text-black">Taxonomy</h2>
                    </div>
                    <div className="flex h-full bg-white">
                        <ul className="flex-col border-r border-[#eee]">
                            {nav.map(navItem => (
                                <li key={navItem.id} className={`cursor-pointer text-lg text-black hover:text-black py-3 hover:bg-slate-200 px-8 ${view === navItem.id  ? 'bg-slate-200 !text-black' : ""}`} onClick={() => setView(navItem.id)}>{navItem.name}</li>
                            ))}
                        </ul>
                        <div className="flex-grow mx-auto">
                            <div  className="p-4 grid grid-cols-4 gap-4 w-full">
                                {book_data.data.filter(file => file.type === (view === "notes" ? "book": "video")).map(file => (
                                    view === "notes" ? (
                                        <BookItem key={file?.uuid} file={file} />
                                    ) : (
                                        <VideoItem key={file?.uuid} file={file} />
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )

}

export default SubjectDetails