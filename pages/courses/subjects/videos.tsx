import { getBooksEffect } from "@/store/effects/book"
import { ApplicationState } from "@/store/types"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "../../../components/Container"
import VideoItem from "../../../components/VideoItem"
import DashboardLayout from "../../../layouts/DashboardLayout"

const Videos = () => {

    // Store
    const { book: {book_data}} = useSelector((state:ApplicationState) => state)

    // Hooks
    const dispatch = useDispatch()
    
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
            <Container className="flex flex-col h-full">
                <h2 className="mb-8">Videos</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
                        {book_data.data.filter(file => file.type === "video").map(file => (
                            <VideoItem key={file?.uuid} file={file} />
                        ))}
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Videos