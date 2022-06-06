import { Icon } from "@iconify/react"

interface Props {
    title: string,
    value: string | number;
    icon: string;
    bonus: string;
}

const DashboardCard:React.FC<Props> = ({
    icon,
    title, 
    value,
    bonus
}) => {
    return (
        <div className="shadow-sm rounded-md w-full bg-[#fdfdfd]">
            <div className="px-8 py-6">
                <div className="flex justify-between">
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-primary">{bonus}</p>
                </div>
                <div className="my-4 flex justify-between">
                    <p className="text-3xl text-black">{value}</p>
                    <Icon className="mt-4" color="black" icon={icon} height={32} />
                </div>
            </div>
        </div>
    )
}

export default DashboardCard