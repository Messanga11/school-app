import { useLoginChecker } from "@/utils/hooks"
import { Icon } from "@iconify/react"
import { Container } from "@mui/material"
import DashboardItem from "../../components/DashboardItem"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"

const Students = () => {

    useLoginChecker(true)

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                <div className="my-8 col-span-3 px-4">
                    <div className="py-8">
                        <div className="font-bold flex justify-between items-center">
                            <h2 className="text-2xl text-white mb-8">Payments</h2>
                        </div>
                        <div className="my-4">
                            <div className="flex gap-2 items-center intent py-0 shadow-sm rounded-full bg-[#515153]">
                                <Icon icon="akar-icons:search" color="white" />
                                <input type="text" className="border-none bg-transparent outline-none flex-grow py-3 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-12">
                            <DashboardItem icon="fa-solid:money-check" title="Test du livre" />
                            <DashboardItem icon="fa-solid:money-check" title="Test des livres" />
                            <DashboardItem icon="fa-solid:money-check" title="Livre de tes" />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Students