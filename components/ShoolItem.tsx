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
        <div className="shadow-sm">
            <div className="p-4 border bg-white">
                <p className="font-bold truncate mb-2">{school?.name}</p>
                <Button className="w-full" onClick={() => router.push(`/schools/${school?.uuid}`)}>See details</Button>
            </div>
        </div>
    )
}

export default SchoolItem