import Container from "../../../components/Container"
import VideoItem from "../../../components/VideoItem"
import DashboardLayout from "../../../layouts/DashboardLayout"

const Videos = () => {

    return (
        <DashboardLayout>
            <Container className="flex flex-col justify-center h-full -mt-8">
                <h2 className="text-center mb-4">Videos</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <VideoItem />
                            <VideoItem />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Videos