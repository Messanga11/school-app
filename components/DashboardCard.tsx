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
        <div className="shadow-md rounded-md w-full bg-[#fff]">
            <div className="px-8 py-6">
                <div className="flex justify-between">
                    <p className="uppercase">{title}</p>
                    <p className="text-green-500">{bonus}</p>
                </div>
                <div className="my-4">
                    <p className="text-5xl text-black">{value}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="opacity-60 text-sm">{smallText}</p>
                    <div className="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center text-white">
                        <Icon icon={icon} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard