import { Icon } from "@iconify/react"
import { useRouter } from "next/router"

const VideoItem = () => {

    const router = useRouter()

    return (
        <div className="shadow-md flex justify-center items-center h-56 rounded-md cursor-pointer" onClick={() => {
            router.push("/courses/subjects/1234")
        }}>
            <Icon icon="bi:play-circle-fill" height={40} />
        </div>
    )

}

export default VideoItem