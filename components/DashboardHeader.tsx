import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from "next/image"
import { Icon } from '@iconify/react'
import { useRef } from 'react'
import { useClickOutsideClose } from '../utils/hooks'

const DashboardHeader = () => {

    const timelineMenuRef =useRef(null)

    const router = useRouter()

    const navigationItems = [
        {
            name: "Home",
            link:  "/",
            icon: <Icon icon={"ep:home-filled"} />
        },
        {
            name: "My courses",
            link:  "/courses/my",
            icon: <Icon icon={"ep:management"} />
        },
        {
            name: "Library",
            link:  "/library",
            icon: <Icon icon={"ep:menu"} />
        },
    ]

  return (
    <div className='w-full h-16 bg-gray-100 border-b border-gray-200 px-4 text-black font-semibold flex items-center justify-between'>
        <div className='w-full h-full'>
            <div className='flex justify-between items-center h-full'>

            <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image className='absolute h-full w-full object-cover' layout='fill' src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="profile" />
            </div>
            
                <div className='flex-grow pl-44 flex items-center h-full'>
                    <ul className='flex h-full'>
                        {navigationItems.map((navItem, i) => (
                            <li className='cursor-pointer hover:bg-slate-200 h-full px-10 flex items-center' key={`nav-item-header-${i}`} onClick={() => router.push(navItem.link)}>
                                <p className='flex gap-2 leading-3 items-center'>{navItem.icon} {navItem.name}</p>
                            </li>
                        ) )}
                    </ul>
                </div>
                <div className='bg-white shadow-sm h-full'>
                    <div ref={timelineMenuRef} className='px-4 py-3 border-x flex gap-4 h-full items-center'>
                            <p>17 FEB 2002</p>
                            <p className='leading-0'>17:30:00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader