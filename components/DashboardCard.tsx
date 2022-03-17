import { Icon } from "@iconify/react"

const DashboardCard = () => {
    return (
        <div className="shadow-md rounded-md bg-gray-50 w-full">
            <div className="p-4 w-full flex justify-between items-center">
                <div className="w-full">
                    <p className="font-bold text-4xl">12</p>
                    <small className="text-md">Cours suivis</small>
                </div>
                <div>
                    <Icon color="black" height={40} icon="akar-icons:chevron-right" />
                </div>
            </div>
        </div>
    )
}

export default DashboardCard