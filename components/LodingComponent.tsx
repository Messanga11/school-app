import { useRouter } from "next/router"
import Loading from "./basics/Loading"

const LoadingComponent = () => {

    return (
        <div className="py-10 h-96 flex justify-center items-center">
            <Loading />
        </div>
    )

}

export default LoadingComponent