import { ApplicationState, AppRoles } from "@/store/types"
import { Fragment } from "react"
import { useSelector } from "react-redux"

interface Props {
    children: React.ReactElement,
    access_role: keyof AppRoles,
    role?: keyof AppRoles,
}

const AccessGuard:React.FC<Props> = ({children, role, access_role}) => {

    const user_role = useSelector((state:ApplicationState) => state.auth.userInfos?.role)

    return role === (access_role || user_role) ? (
        <Fragment>
            {children}
        </Fragment>
    ) : null

}

export default AccessGuard