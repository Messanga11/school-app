import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { subjects } from '../utils/common'
import Image from "next/image"
import { Icon } from '@iconify/react'
import Friend from '../components/Friend'
import Input from '@/components/basics/Input'
import Tabs from '@/components/basics/Tabs'
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsEffect, getStudentsEffect, sendInvitationEffect, getInvitationsEffect } from '../store/effects/student';
import { ApplicationState } from '../store/types/index';
import toast from 'react-hot-toast';
import { AnyObject } from 'immer/dist/internal'

const Profile = () => {

  const { student: { friends, student_data, invitations } } = useSelector((state:ApplicationState) => state)

    // States
    const [selectedExam, setSelectedExam] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [activeTabId, setActiveTabId] = useState("students")
    const [loading, setLoading] = useState(false)

    // Hooks
    const router = useRouter()
    const dispatch = useDispatch()

    const tabs = [
      {
        id: "students",
        title: "Other students",
      },
      {
        id: "friends",
        title: "Friends",
      },
      {
        id: "invitations",
        title: "Invitations",
      },
    ]

    const fetchOtherStudents = () => {
      dispatch(getStudentsEffect({
        range: {
            page: 1,
            per_page: 10,
            order_field: "date_added"
        },
        failCb: (data:any) => toast.error(data?.detail || "Something went wrong!"),
        successCb: ():void => {
            
        },
        setLoading: setLoading
      }))
    }

    const fetchFriends = () => {
      dispatch(getFriendsEffect({
        setLoading,
        successCb: () => undefined,
        failCb: (data:any) => toast.error(data?.detail || "Something went wrong!"),
      }))
    }

    
  const getInvitations = () => {
    dispatch(getInvitationsEffect({
      setLoading,
      successCb: () => undefined,
      failCb: (data:any) => toast.error(data?.detail || "Something went wrong!"),
    }))
  }
  
  const getData = () => {
    fetchFriends()
    fetchOtherStudents()
    getInvitations()
  }

    useEffect(() => {
      getData()
      // eslint-disable-next-line
    }, [])
    

  return (
    <DashboardLayout title="Profile" >
    <div className='p-12'>
          
          <div className='mb-4'>
            <p>Search a student</p>
            <Input name="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </div>
          
          <Tabs tabs={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />          
          
          {activeTabId === "invitations" && (<div className="w-full">
                <div className='w-full grid grid-cols-5 gap-4'>
                  {invitations?.data?.map(invitation => (
                    <Friend key={invitation.request_user?.uuid} friend={invitation.request_user} invitationUuid={invitation.uuid}
                    getData={getData} />
                  ))}
                </div>
          </div>)}
          
          {activeTabId === "friends" && (
            <div className='w-full grid grid-cols-5 gap-4'>
                {friends?.data?.map(invitation => (
                  <Friend
                    key={invitation.request_user?.uuid} friend={invitation.request_user} invitationUuid={invitation.uuid}
                    accepted={invitation.accepted}
                    getData={getData} />
                ))}
              </div>
            )}
          
          {activeTabId === "students" && (
            <div className='w-full grid grid-cols-5 gap-4'>
                  {student_data?.data?.map(student => (
                    <Friend key={student.uuid} friend={student} />
                  ))}
            </div>
          )}

      </div>
    </DashboardLayout>
  )
}

export default Profile