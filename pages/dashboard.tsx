import { Icon } from "@iconify/react"
import Container from "../components/Container"
import DashboardCard from "../components/DashboardCard"
import DashboardLayout from "../layouts/DashboardLayout"

const Dashboard = () =>{

return (
    <DashboardLayout titleDesc="admin pannel">
        <Container>
            <div className="grid grid-cols-2 max-w-6xl mx-auto w-full gap-4">
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
            </div>
        </Container>
    </DashboardLayout>
)

}

export default Dashboard