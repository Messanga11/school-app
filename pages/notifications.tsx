import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { subjects } from '../utils/common'
import Image from "next/image"
import { Icon } from '@iconify/react'

const Notifications = () => {

    const [selectedExam, setSelectedExam] = useState(null)
    const router = useRouter()

  return (
    <DashboardLayout title="Profile" >
<div className='p-12'>
        <h2 className="text-3xl mb-8 md:text-5xl max-w-xl !leading-snug pl-4 xl:pl-0">
        Notifications
        </h2>
      
      <div className="w-full">
            <div className='w-full flex flex-col gap-4'>
                  <button className='flex justify-between items-center px-6 py-3 w-full bg-gray-white rounded-md shadow-sm hover:shadow-md shadow-gray-50 border border-gray-100 focus:outline-none focus:shadow-sm transition duration-100'>
                        <div>
                              <div className='flex gap-3 items-center'>
                                    <div className='bg-black rounded-full flex justify-center items-center h-12 w-12'>
                                          <Icon icon="codicon:bell" color='white' />
                                    </div>
                                    <div className='text-left'>
                                          <p className='font-bold text-lg'>Paul Messanga  accepted your invitation</p>
                                          <small className='text-gray-500'>Just now</small>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div>
                                    <Icon icon="akar-icons:chevron-right" />
                              </div>
                        </div>
                  </button>
            </div>
      </div>

</div>
    </DashboardLayout>
  )
}

export default Notifications