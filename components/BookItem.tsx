import { useRouter } from "next/router"

const BookItem = () => {

    const router = useRouter()

    return (
        <div className="shadow-md flex justify-center items-center h-44 rounded-md cursor-pointer" onClick={() => {
            router.push("/courses/subjects/1234")
        }}>
            Book
        </div>
    )

}

export default BookItem