import { logoutEffect } from '@/store/effects/auth'
import { ApplicationState, User } from '@/store/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DashboardSidebar = ({admin, guardian, school}: {admin?: boolean, guardian?: boolean, school?: boolean}) => {
    
    const dispatch = useDispatch()

    const router = useRouter()
    const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)

    const navigationItems = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: <Icon icon="clarity:dashboard-solid" height={20} />
        },
        {
            name: "Edit profile",
            link: "/profile",
            icon: <Icon icon="ep:user-filled" height={20} />
        },
        {
            name: "Friends",
            link: "/friends",
            icon: <Icon icon="heroicons-solid:users" height={20} />
        },
        {
            name: "Messages",
            link: "/messages",
            icon: <Icon icon="ant-design:message-filled" height={20} />
        },
        {   
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" height={20} />,
            logout: true
        },
        {
            name: "Help",
            link: "/help",
            icon: <Icon icon="bxs:help-circle" height={20} />
        },
    ]
    
    const adminNavigationItems = [
        {
            name: "Dashboard",
            link: "/administration",
            icon: <Icon icon="clarity:dashboard-solid" height={20} />
        },
        {
            name: "Students",
            link: "/administration/students",
            icon: <Icon icon="heroicons-solid:users" height={20} />
        },
        {
            name: "Subjects",
            link: "/administration/subjects",
            icon: <Icon icon="uis:subject" height={20} />
        },
        {
            name: "Papers",
            link: "/administration/papers",
            icon: <Icon icon="healthicons:i-certificate-paper" height={20} />
        },
        {
            name: "Payments",
            link: "/administration/payments",
            icon: <Icon icon="fa-solid:money-check" height={20} />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" height={20} />,
            logout: true
        },
    ]

    const guardianNavigationItems = [
        {
            name: "Dashboard",
            link: "/guardian",
            icon: <Icon icon="clarity:dashboard-solid" height={20} />
        },
        {
            name: "Messages",
            link: "/guardian/messages",
            icon: <Icon icon="ant-design:message-filled" height={20} />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" height={20} />,
            logout: true
        },
    ]

    const schoolNavigationItems:any = [
        {
            name: "Dashboard",
            link: "/schools/administration",
            icon: <Icon icon="clarity:dashboard-solid" height={20} />
        },
        {
            name: "Profile",
            link: "/schools/administration/update",
            icon: <Icon icon="clarity:dashboard-solid" height={20} />
        },
        {
            name: "Logout",
            link: "#logout",
            icon: <Icon icon="ion:exit" height={20} />,
            logout: true
        },
    ]

  return (
    <div className='bg-[#fdfdfd] h-full border-r border-[#efefef] pb-6 w-full' style={{maxWidth: 270}}>
        <div>
            <div>
                <div className='h-16 flex items-center justify-center w-full'>
                    <div className="px-4 text-sm text-center flex items-center gap-3">
                            <div className='bg-primary h-10 w-10 rounded-full flex justify-center items-center mx-auto'>
                                <Icon icon="bxs:user" color="white" height={16} />
                            </div>
                            <div className='!text-black text-left' style={{width: 150}}>
                                <p className='text-sm font-semibold text-[#000] truncate'>@{(userInfos as User)?.user_name}</p>
                                {!admin && <p className='text-xs text-black truncate'>US: ID  - {userInfos?.uuid}</p>}
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
                            transition-gpu duration-300 w-full text-sm py-3 flex gap-4 items-center text-md pl-4 pr-10 rounded-md hover:text-primary hover:bg-primary/25 font-light
                            ${router.pathname === navItem.link ? " text-primary bg-primary/25" : "text-gray-500 ml-0"}`}>{navItem.icon} {navItem.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashboardSidebar
