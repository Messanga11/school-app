import { useRouter } from "next/router"

interface PastQuestionItemProps {
    text?: string | number,
    onClick?: Function,
    xl?: boolean
}

const PastQuestionItem = ({text, onClick, xl}: PastQuestionItemProps) => {

    const router = useRouter()

    return (
        <div className={`shadow-md flex justify-center items-center ${xl ? "h-72" : "h-44"} rounded-md cursor-pointer`} onClick={() => {
            if(onClick instanceof Function) {
                onClick()
            } else router.push(`/courses/subjects/past-questions/papers/${text}`)
        }}>
            {text}
        </div>
    )

}

export default PastQuestionItem