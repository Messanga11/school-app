import Input from "@/components/basics/Input"
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
                            <h2 className="text-2xl text-black mb-8">Payments</h2>
                        </div>
                        <div className="my-4">
                            <Input icon={<Icon icon="akar-icons:search" color="black" />} />
                        </div>
                        <div className="flex flex-col gap-6 mt-12">
                            <DashboardItem size="sm" icon="fa-solid:money-check" title="Test du livre" />
                            <DashboardItem size="sm" icon="fa-solid:money-check" title="Test des livres" />
                            <DashboardItem size="sm" icon="fa-solid:money-check" title="Livre de tes" />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Students