import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import Select from "@/components/basics/Select"
import DefaultLayout from '@/layouts/DefaultLayout';
import Container from '@/components/Container';
import Input from '@/components/basics/Input';
import Button from '@/components/basics/Button';
import SchoolItem from "@/components/ShoolItem";

interface Props {
}

const SchoolList:React.FC<Props> = () => {
    // Store
    const {  } = useSelector((state:ApplicationState) => state)
    const schools_data = {
        data: [{uuid: "shcoll-ueldk", name: "School", region: "Centre", phone_number: "657394893", email: "school@school.com"}]
    }
    
    // States
    const [searchInputValue, setSearchInputValue] = useState<string>("")

    // Constants
    
    // Function
    
    // Effects

    return (
        <DefaultLayout university>
            <Container>
                <div className="max-w-xl">
                    <h2>Search an university</h2>
                    <small>Enter the region and the university name of the university you are searching for</small>
                    <div className="mt-4">
                        <div className="flex gap-4 items-center mt-4">
                            <input className="flex-grow h-8 px-4" value={searchInputValue}
                            placeholder="Enter the university name"
                            onChange={(e) => setSearchInputValue(e.target.value)} />
                            <Button className="block h-8">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 mb-4">
                        <p className="font-bold">Results</p>
                    </div>

                    <div>
                        <div className="grid grid-cols-4 gap-4">
                            {schools_data?.data.map(school => (
                                <SchoolItem key={school?.uuid} school={school} />
                            ))}
                        </div>
                    </div>
            </Container>
        </DefaultLayout>
    )
}

export default SchoolList