import { AppRoles } from "@/utils/common"
import { Fragment } from "react"

interface Props {
    children: React.ReactElement,
    access_role: keyof AppRoles,
    role: keyof AppRoles,
}

const AccessGuard:React.FC<Props> = ({children, role, access_role}) => {

    return role === access_role ? (
        <Fragment>
            {children}
        </Fragment>
    ) : null

}

export default AccessGuard