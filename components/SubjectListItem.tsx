import { Icon } from "@iconify/react"
import { useRouter } from "next/router"

const SubjectListItem = () => {

    const router = useRouter()

    return (
        <div className="bg-gray-50 p-2 cursor-pointer rounded-md" onClick={() => router.push("/courses/subjects/topics/1234")}>
            <div className="w-full">
                <div className="flex items-center gap-6 w-full">
                    <Icon icon="bx:book-bookmark" />
                    <span>Text</span>
                    <span className="ml-auto">
                        <Icon icon="akar-icons:chevron-right" />
                    </span>
                </div>
            </div>
        </div>
    )

}

export default SubjectListItem