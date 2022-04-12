import Head from "next/head"
import { JsxChild } from "typescript"
import DashboardSidebar from "../components/DashboadrSidebar"
import DashboardHeader from "../components/DashboardHeader"
import { useTranslation } from "../utils/hooks"

interface DashboardLayoutProps {
    title?: string
    titleDesc?: string
    children: any,
    admin?: boolean
}

const DashboardLayout:React.FC<DashboardLayoutProps> = ({title, titleDesc, children, admin}) => {

    const t = useTranslation()

    return (
        <div color="black">
            <Head>
                <title>US Dashboard | {titleDesc}</title>
            </Head>
            <div className="">
                <div>
                    <div className="flex h-screen">
                    <DashboardSidebar admin={!!admin} />
                    <div className="text-black flex-grow overflow-y-scroll h-full">
                        {!admin && (
                            <DashboardHeader />
                        )}
                        {children}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardLayout