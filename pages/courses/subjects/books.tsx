import Container from "../../../components/Container"
import BookItem from "../../../components/BookItem"
import DashboardLayout from "../../../layouts/DashboardLayout"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"
import { getBooksEffect } from "@/store/effects/book"
import { ApplicationState } from "@/store/types"

const Books = () => {

    // Store
    const { book: {book_data}} = useSelector((state:ApplicationState) => state)

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
                <h2 className="mb-8">Books</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
                        {book_data.data.filter(file => file.type === "book").map(file =>  (
                            <BookItem key={file?.uuid} file={file} />
                            )
                        )}
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Books