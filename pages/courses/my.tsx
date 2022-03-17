import Container from "../../components/Container"
import Subject from "../../components/Subject"
import DashboardLayout from "../../layouts/DashboardLayout"

const MyCourses = () => {

    return (
        <DashboardLayout>
            <Container className="flex flex-col justify-center h-full -mt-8">
                <h2 className="text-center mb-4">My courses</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-4 gap-4">
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default MyCourses