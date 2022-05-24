import { logoutEffect } from '@/store/effects/auth'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const DashboardSidebar = ({admin, guardian, school}: {admin?: boolean, guardian?: boolean, school?: boolean}) => {
    
    const dispatch = useDispatch()

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
            name: "Messages",
            link: "/messages",
            icon: <Icon icon="ant-design:message-filled" />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />,
            logout: true
        },
        {
            name: "Help",
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
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />,
            logout: true
        },
    ]

    const guardianNavigationItems = [
        {
            name: "Dashboard",
            link: "/guardian",
            icon: <Icon icon="clarity:dashboard-solid" />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />,
            logout: true
        },
    ]

    const schoolNavigationItems:any = [
        {
            name: "Dashboard",
            link: "/schools/administration",
            icon: <Icon icon="clarity:dashboard-solid" />
        },
        {
            name: "Profile",
            link: "/schools/administration/update",
            icon: <Icon icon="clarity:dashboard-solid" />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" />,
            logout: true
        },
    ]

  return (
    <div className='bg-[#fff] h-full border-r border-[#eee] pb-6' style={{minWidth: 210}}>
        <div>
            <div>
                <div className='h-16 flex items-center justify-center'>
                    <div className="px-4 text-sm text-center flex items-center gap-3">
                            <div className='bg-black h-8 w-8 rounded-md flex justify-center items-center mx-auto'>
                                <Icon icon="bxs:user" color="white" height={25} />
                            </div>
                            <div className='!text-black'>
                                <p className='text-sm text-black'>@administrator</p>
                                {!admin && <p className='text-sm text-black'>US: ID  - 0000</p>}
                            </div>
                    </div>
                </div>
                <hr className='border-[#eee]' />
                <ul className='flex flex-col gap-3 mt-8'>
                    {(guardian ? guardianNavigationItems : school ? schoolNavigationItems : admin ? adminNavigationItems : navigationItems).map((navItem:any, i:number) => (
                        <li key={`sidebar-nav-item-${i}`} className='w-full px-8 border-l-3 border-gray-400 block cursor-pointer font-semibold' onClick={() => {
                            //@ts-ignore
                            if(navItem?.logout) {
                                dispatch(logoutEffect())
                                router.push("/")
                            } else {
                                router.push(navItem.link)
                            }
                        }}>
                            <div className={`
                            transition-gpu duration-300 hover:ml-2 w-full py-2 flex gap-4 items-center text-md hover:text-black font-light
                            ${router.pathname === navItem.link ? " ml-2 text-black" : "text-gray-500 ml-0"}`}>{navItem.icon} {navItem.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashboardSidebar
