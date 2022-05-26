import { Icon } from '@iconify/react'
import React from 'react'

interface DashboardItemProps {
  icon: string,
  title: string,
  onEdit?: Function,
  onDelete?: Function,
  size?: "sm"
}

const DashboardItem:React.FC<DashboardItemProps> = ({icon, title, size, onEdit, onDelete}) => {
  return (
    <div className={`flex justify-between items-center px-6 w-full bg-gray-100 rounded-md focus:outline-none focus:shadow-md transition duration-100 cursor-default ${size === "sm" ? "text-sm py-1" : "py-3"}`}>
        <div>
                <div className='flex gap-3 items-center'>
                  <div className='bg-white h-10 w-10 rounded-full my-4 flex justify-center items-center'>
                      <Icon icon={icon} color="black" height={15} />
                  </div>
                  <p className='text-lg'>{title}</p>
                </div>
        </div>
        <div>
            <div className='flex gap-2'>
              {onEdit instanceof Function && <button className={`intent shadow-md rounded-md ${size === "sm" ? "h-10" : ""}`} onClick={() => onEdit()}>
                <Icon icon="clarity:edit-line" color="black" />
              </button>}
              {onDelete instanceof Function && <button  className={`intent shadow-md rounded-md bg-red-400 ${size === "sm" ? "h-10" : ""}`} onClick={() => onDelete()}>
                <Icon icon="carbon:trash-can" color='white'  />
              </button>}
            </div>
        </div>
    </div>
  )
}

export default DashboardItem