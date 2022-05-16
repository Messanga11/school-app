import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import { useRouter } from "next/router"
import Container from '@/components/Container';

interface Props {
}

const Schools:React.FC<Props> = () => {
    // Store

    // Hooks
    const router = useRouter()
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <DefaultLayout university>
            <Container>
                <div className="mt-4">
                <div className="text-center mb-4">
                    <h2 className="text-center">Which action do you want to perform ?</h2>
                    <small>You can search or register an university to the platform</small>
                </div>
                    <div className="grid grid-cols-2 h-full gap-4">
                        <div>
                            <button className="h-96 bg-black block w-full opacity-80 hover:opacity-100"
                            onClick={() => router.push("/university/search")}>
                                <h2 className="text-white">Search an university</h2>
                            </button>
                        </div>
                        <div>
                            <button className="h-96 bg-black block w-full opacity-80 hover:opacity-100"
                            onClick={() => router.push("/university/create")}>
                                <h2 className="text-white">Create an university profile</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </DefaultLayout>
    )
}

export default Schools