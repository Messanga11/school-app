import { Student } from '@/store/ResponseTypes'
import { Icon } from '@iconify/react'
import React from 'react'

interface StudentProps {
  friend: Student,
  setStudentToSendMessage?: (student:Student) => void
}

const Friend = ({friend, setStudentToSendMessage}: StudentProps) => {
  return (
    <div className='flex justify-between items-center px-6 py-3 w-full bg-gray-100 rounded-md hover:shadow-md shadow-gray-50 focus:outline-none focus:shadow-md transition duration-100'>
        <div>
                <div className='flex gap-3 items-center'>
                    <img className='h-16 border-2 border-gray-100 shadow-sm w-16 rounded-full object-cover' src="http://localhost:3005/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527980965255-d3b416303d12%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D580%26q%3D80&w=1920&q=75" alt="Student" loading='lazy' />
                    <p className='text-lg'><span>{friend.firstname}</span> <span className='font-bold'>{friend.lastname}</span></p>
                </div>
        </div>
        <div className='flex gap-4 items-center'>
                <button className='intent shadow-md h-10' onClick={() =>{
                  if(setStudentToSendMessage instanceof Function) {
                    setStudentToSendMessage(friend)
                  }
                }}>
                    <Icon icon="akar-icons:chevron-right" />
                </button>
        </div>
    </div>
  )
}

export default Friend