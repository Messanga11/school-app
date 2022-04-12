import { Icon } from "@iconify/react"

interface Props {
    title: string,
    value: string | number;
    icon: string;
    smallText: string;
    bonus: string;
}

const DashboardCard:React.FC<Props> = ({
    icon,
    smallText,
    title, 
    value,
    bonus
}) => {
    return (
        <div className="shadow-md rounded-md w-full bg-white">
            <div className="p-4">
                <div className="flex justify-between">
                    <span className="uppercase">{title}</span>
                    <span className="text-green-500">{bonus}</span>
                </div>
                <div className="my-4">
                    <span className="text-5xl">{value}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="opacity-60">{smallText}</p>
                    <div className="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center text-white">
                        <Icon icon={icon} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard