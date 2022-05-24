import LoadingComponent from "@/components/LodingComponent"
import { getUserInfosEffect } from "@/store/effects/auth"
import { ApplicationState } from "@/store/types"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { JsxChild } from "typescript"
import DashboardSidebar from "../components/DashboadrSidebar"
import DashboardHeader from "../components/DashboardHeader"
import { useTranslation } from "../utils/hooks"

interface DashboardLayoutProps {
    title?: string
    titleDesc?: string
    children: any,
    admin?: boolean
    guardian?: boolean
    noHeader?: boolean
    school?: boolean
    university?: boolean
}

const DashboardLayout:React.FC<DashboardLayoutProps> = ({title, titleDesc, children, admin, guardian, noHeader, school}) => {

    // Hooks
    const t = useTranslation()
    const dispatch = useDispatch()
    const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)

    // States
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    if(!userInfos) {
        dispatch(getUserInfosEffect({
            setLoading,
            successCb: () => {
            
        },
        failCb: () => {
            toast.error("Please login before accessing this page!")
            window.location.href = "/home"
        }
        }))
    }
    }, [])
    

    return loading ? (
            <div className="h-screen w-screen flex justify-center items-center">
                <LoadingComponent />
            </div>
        ) : (<div color="black">
            <Head>
                <title>US Dashboard | {titleDesc}</title>
            </Head>
            <div className="">
                <div>
                    <div className="flex h-screen">
                    <DashboardSidebar admin={!!admin} guardian={!!guardian} school={!!school} />
                    <div className="text-white flex-grow overflow-y-scroll h-full">
                        {!admin && !noHeader && (
                            <DashboardHeader />
                        )}
                        {children}
                    </div>
                </div>
                </div>
            </div>
        </div>)}

export default DashboardLayout