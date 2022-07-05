import Head from "next/head"
import { useTranslation } from "../utils/hooks"
import HeaderComponent from '../components/HeaderComponent';

interface Props {
    title?: string
    titleDesc?: string
    children: any,
    admin?: boolean
    school?: boolean
    university?: boolean
    noWidthLimit?: boolean
}

const DefaultLayout:React.FC<Props> = ({title, titleDesc, children, admin, school, noWidthLimit, university}) => {

    const t = useTranslation()

    return (
        <div>
            <Head>
                <title>Ultimate School | {titleDesc}</title>
            </Head>
            <HeaderComponent school={school} university={university} />
            <div>
                <div>
                    <div className={`${!noWidthLimit ?  "container-block " : ""}`} style={{paddingTop: 80}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DefaultLayout