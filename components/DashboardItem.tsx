import { Icon } from '@iconify/react'
import React from 'react'

interface DashboardItemProps {
  icon: string,
  title: string,
  noActions?: boolean,
  size?: "sm"
}

const DashboardItem = ({icon, title, size, noActions}: DashboardItemProps) => {
  return (
    <div className={`flex justify-between items-center px-6 w-full bg-gray-100 rounded-md shadow-gray-50 focus:outline-none focus:shadow-md transition duration-100 cursor-default ${size === "sm" ? "text-sm py-1" : "py-3"}`}>
        <div>
                <div className='flex gap-3 items-center'>
                  <div className='bg-black h-10 w-10 rounded-full my-4 flex justify-center items-center'>
                      <Icon icon={icon} color="white" height={15} />
                  </div>
                  <p className='text-lg'>{title}</p>
                </div>
        </div>
        {!noActions && <div>
            <div className='flex gap-2'>
              <button className={`intent shadow-md ${size === "sm" ? "h-10" : ""}`}>
                <Icon icon="clarity:edit-line" />
              </button>
              <button  className={`intent shadow-md bg-red-400 ${size === "sm" ? "h-10" : ""}`}>
                <Icon icon="carbon:trash-can" color='white'  />
              </button>
            </div>
        </div>}
    </div>
  )
}

export default DashboardItem