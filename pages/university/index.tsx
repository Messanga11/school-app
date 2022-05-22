import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import { useRouter } from "next/router"
import Container from '@/components/Container';
import { Icon } from "@iconify/react"

interface Props {
}

const Schools: React.FC<Props> = () => {
    // Store

    // Hooks
    const router = useRouter()

    // States
    const { } = useSelector((state: ApplicationState) => state)
    // Constants

    // Function

    // Effects

    return (
        <DefaultLayout university>
            <Container>
                <div className="mt-4">
                    <div className="text-center mb-4">
                        <h2 className="text-center title">Select an action</h2>
                        <p>You can search or register an university to the platform</p>
                    </div>
                    <div className="grid grid-cols-2 h-full gap-4 pt-20">
                        <div>
                            <button className="h-96 bg-black block w-full opacity-80 hover:opacity-100 rounded-md"
                                onClick={() => router.push("/university/search")}>
                                <div className="flex justify-center mb-8"><Icon height={80} icon="akar-icons:search" /></div>
                                <h2>Search an university</h2>
                            </button>
                        </div>
                        <div>
                            <button className="h-96 bg-black block w-full opacity-80 hover:opacity-100 rounded-md"
                                onClick={() => router.push("/university/create")}>
                                <div className="flex justify-center mb-8"><Icon height={80} icon="carbon:document-add" /></div>
                                <h2>Create an university profile</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </DefaultLayout>
    )
}

export default Schools