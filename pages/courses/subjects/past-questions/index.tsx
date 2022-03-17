import Container from "../../../../components/Container"
import PastQuestionItem from "../../../../components/PastQuestionItem"
import DashboardLayout from "../../../../layouts/DashboardLayout"

const PastQuestions = () => {

    return (
        <DashboardLayout>
            <Container className="flex flex-col justify-center -m-8 h-full">
                <h2 className="text-center mb-4">Past questions</h2>
                <div>
                    <div>
                        <div className="grid grid-cols-3 gap-4">
                            <PastQuestionItem text={2022} />
                            <PastQuestionItem text={2021} />
                            <PastQuestionItem text={2020} />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )

}

export default PastQuestions