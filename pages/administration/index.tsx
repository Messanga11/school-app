import { getStudentsEffect } from "@/store/effects"
import { ApplicationState } from "@/store/types"
import { loadingHOC } from "@/utils/hocs"
import { useLoginChecker } from "@/utils/hooks"
import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import Friend from "../../components/Friend"
import DashboardLayout from "../../layouts/DashboardLayout"

const Administration = () =>{
    
    // Hooks
    useLoginChecker(true)
    const dispatch = useDispatch()

    // Store
    const { student: { student_data } } = useSelector((state:ApplicationState) => state)

    // State
    const [loading, setLoading] = useState<boolean>(false)

    // Functions    
    const fetchOtherStudents = () => {
        dispatch(getStudentsEffect({
          range: {
              page: 1,
              per_page: 10,
              order_field: "date_added"
          },
          failCb: (data:any) => toast.error(data?.detail || "Something went wrong!"),
          successCb: ():void => {
              
          },
          setLoading: setLoading
        }))
      }

      useEffect(() => {
        fetchOtherStudents()
        // eslint-disable-next-line
      }, [])
      
    
      const Content = loadingHOC(() => <Container>
        <div>
            <h2 className="text-2xl mb-4 mt-8 text-black">Dashboard</h2>
        </div>
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-md shadow-md bg-[#fff] px-8 py-6">
                    <p className="text-6xl font-extrabold">{student_data?.data.length}</p>
                    <p className="text-xl mt-4 text-black">Students</p>
                    <table className="w-full text-left mt-4 text-black">
                        <thead>
                            <tr>
                                <th>
                                    Boys
                                </th>
                                <th>
                                    Girls
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {student_data?.data?.filter(student => student.gender === "Male").length}
                                </td>
                                <td>
                                    {student_data?.data?.filter(student => student.gender === "Female").length}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rounded-md shadow-md bg-[#fff] px-8 py-6">
                    <p className="text-6xl font-extrabold">0</p>
                    <p className="text-xl mt-4 text-black">VIP Students</p>
                    <table className="w-full text-left mt-4 text-black">
                        <thead>
                            <tr>
                                <th>
                                    Boys
                                </th>
                                <th>
                                    Girls
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {student_data?.data?.filter(student => student.gender === "Male" && student.is_vip).length}
                                </td>
                                <td>
                                    {student_data?.data?.filter(student => student.gender === "Female" && student.is_vip).length}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rounded-md shadow-md bg-[#fff] px-8 py-6">
                    <p className="text-6xl font-extrabold">0k</p>
                    <p className="text-xl mt-4 text-black">FCFA Paid</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4 max-w-6xl mx-auto w-full gap-4 mt-12">
            <div className="my-8 col-span-3 px-4">
                <div>
                    <div className="font-bold flex justify-between items-center">
                        <h2 className="text-2xl text-black">Recent students</h2>
                        <a href="/administartion/students" className="font-light text-xs">View all students</a>
                    </div>
                    <div className="my-6 grid grid-cols-3 gap-4">
                    {student_data?.data?.map(student => (
                        <Friend key={student.uuid} friend={student} />
                    ))}
                    </div>
                </div>
                <div className="mt-12">
                    <div className="font-bold flex justify-between items-center">
                        <h2 className="text-2xl text-black">Recent payments</h2>
                        <a href="/administartion/students" className="font-light text-xs">View all payments</a>
                    </div>
                    <div className="my-6 flex flex-col gap-4">
                        
                    </div>
                </div>
            </div>
            <div className="col-span-1 px-4 my-8">
                <div className="font-bold flex justify-between items-center">
                    <h2 className="text-2xl text-black">Best students</h2>
                </div>
                <div className="my-6 flex flex-col gap-4">
                    
                </div>
            </div>
        </div>
    </Container>, loading) 
  
    
    return (
        <DashboardLayout titleDesc="admin pannel" admin>
            <Content />
        </DashboardLayout>
    )
    
    }
    
    export default Administration