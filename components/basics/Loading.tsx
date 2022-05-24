import { Icon } from "@iconify/react"

const Loading = () => {
    return (
        <div className="animate-spin">
            <Icon height={20} color={"black"} icon="lucide:loader-2" />
        </div>
    )
}

export default Loading
