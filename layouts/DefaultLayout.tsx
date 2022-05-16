import Head from "next/head"
import { useTranslation } from "../utils/hooks"
import HeaderComponent from '../components/HeaderComponent';

interface Default {
    title?: string
    titleDesc?: string
    children: any,
    admin?: boolean
    school?: boolean
    university?: boolean
    noWidthLimit?: boolean
}

const DefaultLayout:React.FC<Default> = ({title, titleDesc, children, admin, school, noWidthLimit, university}) => {

    const t = useTranslation()

    return (
        <div color="black">
            <Head>
                <title>Ultimate School | {titleDesc}</title>
            </Head>
            <div className="flex flex-col h-screen max-h-screen">
                <div>
                    <HeaderComponent school={school} university={university} />
                </div>
                <div className="flex-grow overflow-y-auto pt-28">
                    <div className={`${!noWidthLimit ?  "max-w-6xl " : " "}mx-auto`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DefaultLayout