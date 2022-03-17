import { Container } from "@mui/material"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"

const Administration = () =>{

    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Container>
                <div>
                    <h2 className="text-2xl mb-4 mt-8">Dashboard</h2>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-md shadow-md bg-white p-4">
                            <p className="text-6xl font-extrabold">100</p>
                            <small className="text-2xl">Students</small>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt veniam, aut unde facilis mollitia similique sed eaque</p>
                        </div>
                        <div className="rounded-md shadow-md bg-white p-4">
                            <p className="text-6xl font-extrabold">80</p>
                            <small className="text-2xl">VIP Students</small>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt veniam, aut unde facilis mollitia similique sed eaque</p>
                        </div>
                        <div className="rounded-md shadow-md bg-white p-4">
                            <p className="text-6xl font-extrabold">100k</p>
                            <small className="text-2xl">FCFA Paid</small>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt veniam, aut unde facilis mollitia similique sed eaque</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 max-w-6xl mx-auto w-full gap-4">
                    <div className="my-8 col-span-3 px-4">
                        <div>
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl">Recent students</h2>
                                <a href="/administartion/students">View all students</a>
                            </div>
                            <div className="my-6 flex flex-col gap-4">
                                <Friend friend={{firstname: "Paul", lastname: "Messanga"}} />
                                <Friend friend={{firstname: "Victor", lastname: "Zakaev"}} />
                                <Friend friend={{firstname: "John", lastname: "Snow"}} />
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="font-bold flex justify-between items-center">
                                <h2 className="text-2xl">Recent payments</h2>
                                <a href="/administartion/students">View all students</a>
                            </div>
                            <div className="my-6 flex flex-col gap-4">
                                <Friend friend={{firstname: "Paul", lastname: "Messanga"}} />
                                <Friend friend={{firstname: "Victor", lastname: "Zakaev"}} />
                                <Friend friend={{firstname: "John", lastname: "Snow"}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 px-4 my-8">
                        <div className="font-bold flex justify-between items-center">
                            <h2 className="text-2xl">Best students</h2>
                        </div>
                        <div className="my-6 flex flex-col gap-4">
                            <Friend friend={{firstname: "Paul", lastname: "Messanga"}} />
                            <Friend friend={{firstname: "Victor", lastname: "Zakaev"}} />
                            <Friend friend={{firstname: "John", lastname: "Snow"}} />
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    )
    
    }
    
    export default Administration