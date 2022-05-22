import React from "react"
import { ApplicationState, SchoolMember } from "@/store/types"
import { useSelector } from "react-redux"

interface Props {
    sm?: boolean,
    member: SchoolMember
}

const SchoolMember:React.FC<Props> = ({sm, member}) => {
    // Store
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <div className="text-center">
            <img className={`${sm ? "w-12 h-12" : "w-32 h-32"} rounded-full border border-black bg-gray-700 bg-cover block mx-auto`} src={member?.base_64 || member?.image_url} alt="" />
            <p className="truncate mt-2">{member?.name}</p>
        </div>
    )
}

export default SchoolMember