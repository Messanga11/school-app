import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { subjects } from '../utils/common'
import Image from "next/image"

const Profile = () => {

    const [selectedExam, setSelectedExam] = useState(null)
    const router = useRouter()

  return (
    <DashboardLayout title="Profile" >
<div className='p-12'>
        <h2 className="text-3xl md:text-5xl max-w-xl !leading-snug pl-4 xl:pl-0">
        Profile
        </h2>
    
<main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto p-8">
        <div className="space-y-6 xl:space-y-10">
          <div className="space-y-4 pb-8">
              <div>
                    <p className="text-black font-bold">First name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Last name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">User name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Email *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
          </div>
        </div>

        <div className="p-8">
              <div>
                    <p className="text-black font-bold">Password *</p>
                    <input type="password" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Confirm password *</p>
                    <input type="password" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Guardian phone number *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Phone number</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
        </div>
      </main>
    <button
        className="w-full text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
        onClick={() => router.push("/login")}
    >
        Save
    </button>
</div>
    </DashboardLayout>
  )
}

export default Profile