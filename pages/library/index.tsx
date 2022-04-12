import BookItem from "../../components/BookItem"
import Container from "../../components/Container"
import DashboardLayout from "../../layouts/DashboardLayout"

const Library = () => {

    return (
        <DashboardLayout>
            <Container className="flex flex-col h-full">
                <h2 className="mb-4">Library</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
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