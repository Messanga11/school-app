import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const DashboardSidebar = ({admin}: {admin?: boolean}) => {

    const router = useRouter()

    const navigationItems = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: <Icon icon="clarity:dashboard-solid" />
        },
        {
            name: "Edit profile",
            link: "/profile",
            icon: <Icon icon="ep:user-filled" />
        },
        {
            name: "Friends",
            link: "/friends",
            icon: <Icon icon="heroicons-solid:users" />
        },
        {
            name: "Notifications",
            link: "/notifications",
            icon: <Icon icon="bi:bell-fill" />
        },
        {
            name: "logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />
        },
        {
            name: "help",
            link: "/help",
            icon: <Icon icon="bxs:help-circle" />
        },
    ]
    
    const adminNavigationItems = [
        {
            name: "Dashboard",
            link: "/administration",
            icon: <Icon icon="clarity:dashboard-solid" />
        },
        {
            name: "Students",
            link: "/administration/students",
            icon: <Icon icon="heroicons-solid:users" />
        },
        {
            name: "Subjects",
            link: "/administration/subjects",
            icon: <Icon icon="uis:subject" />
        },
        {
            name: "Papers",
            link: "/administration/papers",
            icon: <Icon icon="healthicons:i-certificate-paper" />
        },
        {
            name: "Payments",
            link: "/administration/payments",
            icon: <Icon icon="fa-solid:money-check" />
        },
        {
            name: "logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />
        },
    ]

  return (
    <div className='text-black h-full border-r border-gray-300' style={{minWidth: 210}}>
        <div>
            <div>
                <ul className='flex flex-col'>
                    <li className="px-4 py-2 text-sm">
                        {admin && (
                            <div className='bg-black h-16 w-16 rounded-full my-4 flex justify-center items-center'>
                                <Icon icon="bxs:user" color="white" height={30} />
                            </div>
                        )}
                        <p>@administrator</p>
                        {!admin && <p>US: ID  - 0000</p>}
                    </li>
                    {(admin ? adminNavigationItems : navigationItems).map((navItem, i) => (
                        <li key={`sidebar-nav-item-${i}`} className='w-full px-4 bg-gray-100 border-l-3 border-gray-500 block cursor-pointer hover:bg-slate-200 font-semibold' onClick={() => router.push(navItem.link)}>
                            <div className='transition-gpu duration-300 ml-0 hover:ml-2 w-full py-2 flex gap-2 items-center'>{navItem.icon} {navItem.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashboardSidebar
