import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { subjects } from '../utils/common'
import Image from "next/image"
import { Icon } from '@iconify/react'
import Friend from '../components/Friend'

const Profile = () => {

    const [selectedExam, setSelectedExam] = useState(null)
    const router = useRouter()

  return (
    <DashboardLayout title="Profile" >
    <div className='p-12'>
            <h2 className="text-3xl mb-8 md:text-5xl max-w-xl !leading-snug pl-4 xl:pl-0">
            Friends
            </h2>
          
          <div className="w-full">
                <div className='w-full flex flex-col gap-4'>
                      <Friend friend={{firstname: "Paul", lastname: "Messanga"}} />
                      <Friend friend={{firstname: "Victor", lastname: "Zakaev"}} />
                      <Friend friend={{firstname: "John", lastname: "Snow"}} />
                </div>
          </div>

    </div>
    </DashboardLayout>
  )
}

export default Profile