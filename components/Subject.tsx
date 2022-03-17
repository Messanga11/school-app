import { useRouter } from "next/router"

const Subject = () => {

    const router = useRouter()

    return (
        <div className="shadow-md flex justify-center items-center h-32 rounded-md cursor-pointer" onClick={() => {
            router.push("/courses/subjects/1234")
        }}>
            Subject
        </div>
    )

}

export default Subject