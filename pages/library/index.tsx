import BookItem from "../../components/BookItem"
import Container from "../../components/Container"
import DashboardLayout from "../../layouts/DashboardLayout"
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from "@/store/types";
import { useCallback, useEffect } from "react";
import { getBooksEffect } from "@/store/effects/book";

const Library = () => {

    // Store
    const { book: {book_data}} = useSelector((state:ApplicationState) => state)

    // Hooks
    const dispatch = useDispatch()
    
    // Functions
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
                <h2 className="mb-4 text-white">Library</h2>
                <div>
                    <div>
                        {book_data.data.filter(file => file.type === "library").length !== 0 && (
                            <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
                            {book_data.data.filter(file => file.type === "library").map(file =>  (
                                <BookItem key={file?.uuid} file={file} />
                                )
                            )}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Library