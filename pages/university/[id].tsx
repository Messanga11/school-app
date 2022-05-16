import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import Container from '@/components/Container';
import SchoolMember from '../../components/SchoolMember';
import SchoolDetailsComponent from '../../components/ShoolDetailsComponent';

interface Props {
}

const SchoolDetails:React.FC<Props> = () => {
    // Store
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <DefaultLayout university>
            <Container>
                <SchoolDetailsComponent university />
            </Container>
        </DefaultLayout>
    )
}

export default SchoolDetails