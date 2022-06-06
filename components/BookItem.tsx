import { Book } from "@/store/types"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import PDFReader from "./basics/PDFReader"

interface Props {
    file: Book
}

const BookItem:React.FC<Props> = ({file}) => {

    const [open, setOpen] = useState<boolean>(false)

    const handleClose = () => {
        setOpen(state => {
            console.log(state);
            return !state
        })
    }

    const openFile = () => {
        setOpen(true)
    }

    return (
        <Fragment>
        {open && (
            <PDFReader url={file.url} handleClose={handleClose} open={open} />
        )}
            <div
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"}}
                className="shadow-sm flex flex-col justify-between h-96 rounded-md cursor-pointer overflow-hidden bg-cover relative" onClick={openFile}>
                <div className="p-4">
                    <p className="font-semibold text-white shadow-sm px-4 py-2 rounded-sm bg-black">Book</p>
                </div>
                <div className="p-4 h-1/2 bg-gradient-to-b from-transparent to-gray-700 flex items-end">
                    <p className="text-white text-xl py-4">{file?.title}</p>
                </div>
                <div className="bg-white bg-opacity-40 flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 opacity-0 hover:opacity-100">
                    <p className="font-semibold text-center text-white">Open the book</p>
                </div>
            </div>
        </Fragment>
    )

}

export default BookItem