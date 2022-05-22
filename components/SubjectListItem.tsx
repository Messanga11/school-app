import { Topic } from "@/store/types"
import { Icon } from "@iconify/react"
import { useRouter } from "next/router"

const SubjectListItem = ({item}:{item: Topic}) => {

    const router = useRouter()

    return (
        <div className="bg-[#2e2e2f] text-white px-6 py-2 cursor-pointer rounded-md" onClick={() => router.push(`/courses/subjects/topics/${item.uuid}`)}>
            <div className="w-full">
                <div className="flex items-center gap-6 w-full">
                    <Icon icon="bx:book-bookmark" />
                    <span>{item?.title}</span>
                    <span className="ml-auto">
                        <Icon icon="akar-icons:chevron-right" />
                    </span>
                </div>
            </div>
        </div>
    )

}

export default SubjectListItem