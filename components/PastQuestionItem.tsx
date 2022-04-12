import { Paper } from "@/store/types"
import { useRouter } from "next/router"

interface PastQuestionItemProps {
    text?: string | number,
    onClick?: Function,
    paper?: Paper
    xl?: boolean,
    showType?: boolean,
}

const PastQuestionItem = ({text, onClick, xl, paper, showType}: PastQuestionItemProps) => {

    const router = useRouter()

    return (
        <div
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"}}
            className="shadow-md flex flex-col justify-between h-96 rounded-md cursor-pointer overflow-hidden bg-cover relative" onClick={() => {
                if(onClick instanceof Function) {
                    onClick()
                } else router.push(`/courses/subjects/past-questions/papers/${paper?.year}`)
            }}>
            <div className="p-4">
                <p className="font-semibold text-black shadow-md px-4 py-2 rounded-sm bg-white">Past question</p>
            </div>
            <div className="p-4 h-1/2 bg-gradient-to-b from-transparent to-gray-700 flex items-end">
                <p className="font-semibold text-white text-2xl py-4">{showType ? paper?.paper_type : paper?.year}</p>
            </div>
            <div className="bg-black bg-opacity-40 flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 opacity-0 hover:opacity-100">
                <p className="font-semibold text-center text-white">Open this year paper</p>
            </div>
        </div>
    )

}

export default PastQuestionItem