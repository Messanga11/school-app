import React from "react"
import { ApplicationState, SchoolMember } from "@/store/types"
import { useSelector } from "react-redux"

interface Props {
    sm?: boolean,
    member?: SchoolMember
}

const SchoolMember:React.FC<Props> = ({sm, member}) => {
    // Store
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <div className="flex flex-col justify-center items-center">
            <img className={`${sm ? "w-12 h-12" : "w-32 h-32"} rounded-full bg-gray-300 bg-cover`} src={member?.image_url} alt="" />
            <p className="truncate">{member?.first_name} {member?.last_name}</p>
        </div>
    )
}

export default SchoolMember