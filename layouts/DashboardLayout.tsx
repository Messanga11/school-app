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

const DashboardLayout = ({title, titleDesc, children, admin}: DashboardLayoutProps) => {

    const t = useTranslation()

    return (
        <div color="black">
            <Head>
                <title>IS Dashboard | {titleDesc}</title>
            </Head>
            {!admin && <DashboardHeader />}
            <div className="mt-16">
                <div>
                    <div className="flex" style={{height: admin ? "100vh" : "calc(100vh - 4rem)"}}>
                    <DashboardSidebar admin={!!admin} />
                    <div className="text-black flex-grow bg-gray-50 overflow-y-scroll h-full">
                        {children}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardLayout