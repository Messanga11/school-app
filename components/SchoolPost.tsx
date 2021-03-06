import React from "react"
import { ApplicationState, SchoolPost } from "@/store/types"
import { useSelector } from "react-redux"

interface Props {
    post: SchoolPost
}

const SchoolPost:React.FC<Props> = ({post}) => {
    return (
        <div className="w-full rounded-md bg-[#fdfdfd] overflow-hidden shadow-sm">
            <div className="w-full bg-gray-300 h-80" style={{backgroundImage: `url(${post?.base_64 || post?.image_url})`}}>
            </div>
            <div className="p-8">
                <h2 className="text-black mb-8 text-3xl">{post?.title}</h2>
                <p className="text-md" style={{lineHeight: "2em"}}>{post?.description}</p>
            </div>
        </div>
    )
}

export default SchoolPost