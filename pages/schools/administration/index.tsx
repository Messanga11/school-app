import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import DashboardLayout from "@/layouts/DashboardLayout"
import Container from "@/components/Container"
import SchoolDetailsComponent from '../../../components/ShoolDetailsComponent';

interface Props {
}

const Administration:React.FC<Props> = () => {
    // Store
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <DashboardLayout noHeader school>
            <Container>
                <SchoolDetailsComponent edit />
            </Container>
        </DashboardLayout>
    )
}

export default Administration