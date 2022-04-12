import { useLoginChecker } from "@/utils/hooks"
import { Icon } from "@iconify/react"
import { Container } from "@mui/material"
import DashboardItem from "../../components/DashboardItem"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"

const Students = () =>{

    useLoginChecker(true)

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                <div className="max-w-6xl mx-auto w-full gap-4">
                    <div className="my-8 col-span-3 px-4">
                        <div>
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl">Payments</h2>
                            </div>
                            <div className="my-4">
                                <div className="flex gap-2 items-center intent py-0 shadow-sm">
                                    <Icon icon="akar-icons:search" />
                                    <input type="text" className="border-none bg-transparent outline-none flex-grow py-3" />
                                </div>
                            </div>
                            <div className="my-6 flex flex-col gap-4 mt-10">
                                <DashboardItem noActions icon="fa-solid:money-check" title="Test du livre" />
                                <DashboardItem noActions icon="fa-solid:money-check" title="Test des livres" />
                                <DashboardItem noActions icon="fa-solid:money-check" title="Livre de tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Students