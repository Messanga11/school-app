import BookItem from "../../components/BookItem"
import Container from "../../components/Container"
import DashboardLayout from "../../layouts/DashboardLayout"

const Library = () => {

    return (
        <DashboardLayout>
            <Container className="flex flex-col justify-center -m-8 h-full">
                <h2 className="text-center mb-4">Library</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-3 gap-4">
                            <BookItem />
                            <BookItem />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default Library