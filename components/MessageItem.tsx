import { getMessagesEffect } from '@/store/effects';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Message } from '../store/types';
import { ApplicationState } from '../store/types/index';

interface Props {
    message: Message
}

const MessageItem:React.FC<Props> = ({message}) => {

  // Store
  const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)

  // Hooks
  const dispatch = useDispatch()

  return (
    <div className={`p-4 w-full bg-${message.sender_uuid !== userInfos?.uuid ? "gray-100" : "green-500"} rounded-md ml-${message.sender_uuid !== userInfos?.uuid ? "auto" : "0"}`} style={{maxWidth: "50%"}}>
          <p className={`text-${message.sender_uuid === userInfos?.uuid ? "gray" : "green"}-50 text-sm`}>{message.text}</p>
          <p className={`text-${message.sender_uuid === userInfos?.uuid ? "gray" : "green"}-200 mt-2 text-xs`}>{new Date(message?.created_at || "").toUTCString()}</p>
    </div>
  )
}

export default MessageItem