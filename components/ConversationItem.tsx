import { getMessagesEffect } from '@/store/effects';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Conversation } from '../store/types';

interface Props {
    conversation: Conversation
}

const ConversationItem:React.FC<Props> = ({conversation}) => {

  // Hooks
  const dispatch = useDispatch()

  // States
  const [loading, setLoading] = useState(false)
  
  const openConversation = () => {
    dispatch(
      getMessagesEffect({
        range: {conversation_uuid: conversation.uuid},
        setLoading,
        successCb: () => undefined,
        failCb: (data: any) =>
          toast.error(data?.detail || "Something went wrong!"),
      })
    );
  };

  return (
    <button className='flex gap-4 bg-gray-50 hover:bg-gray-200 px-3 py-4 relative' onClick={openConversation}>
        <span className='bg-red-500 w-3 h-3 rounded-full absolute right-2 top-2'></span>
        <div className='flex-shrink-0'>
            <img 
            className='w-16 h-16 rounded-full object-cover'
            src="https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        </div>
        <div>
            <p className='text-black font-semibold text-left'>Paul Message</p>
            <p className='text-sm text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </button>
  )
}

export default ConversationItem