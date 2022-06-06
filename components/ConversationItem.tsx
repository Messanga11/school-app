import { getMessagesEffect } from '@/store/effects';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Conversation } from '../store/types';
import { ApplicationState } from '../store/types/index';
import DefaultImageComponent from './DefaultImageComponent';
import Image from 'next/image';
interface Props {
    conversation: Conversation;
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | null>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentConversation: Conversation | null,
    openConversation: (conversation: Conversation) => void
}

const ConversationItem:React.FC<Props> = ({conversation, setCurrentConversation, setLoading, currentConversation, openConversation}) => {

  // Store
  const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)

  // Constants
  const otherMember = conversation.members.find(member => member.uuid !== userInfos?.uuid)

  // Hooks
  const dispatch = useDispatch()

  return (
    <button className={`flex gap-4 bg-gray-50 hover:bg-gray-200 px-3 py-4 relative w-full rounded-md ]`} onClick={() => openConversation(conversation)}>
        <span className='bg-red-500 w-3 h-3 rounded-full absolute right-2 top-2'></span>
        <div className='flex-shrink-0'>
            {otherMember?.image_url ? (
              <img
                className='h-16 w-16 rounded-full object-cover'
                src={otherMember?.image_url} alt={otherMember?.first_name}
              />
            )
          : (
              <div className='h-16 w-16 rounded-full overflow-hidden'>
                <DefaultImageComponent/>
              </div>
          )}
        </div>
        <div>
            <p className='text-black font-semibold text-left'>{otherMember?.first_name} {otherMember?.last_name}</p>
            <p className='text-sm text-left'>{conversation?.last_message}</p>
        </div>
    </button>
  )
}

export default ConversationItem