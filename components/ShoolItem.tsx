import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import { School } from '../store/types/School';
import DefaultImageComponent from './DefaultImageComponent';
import Button from "./basics/Button";
import { useRouter } from 'next/router';

interface Props {
    school: School
}

const SchoolItem:React.FC<Props> = ({school}) => {
    // Store

    // Hooks
    const router = useRouter()
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    

    return (
        <div className="shadow-sm rounded-md" style={{background: "#2e2e2f"}}>
            <div className="px-8 py-6">
                <p className="mb-4 truncate">{school?.name}</p>
                <Button className="w-full" onClick={() => router.push(`/schools/${school?.uuid}`)}>See details</Button>
            </div>
        </div>
    )
}

export default SchoolItem