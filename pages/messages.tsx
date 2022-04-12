import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../layouts/DashboardLayout'
import { getConversationsEffect, sendMessageEffect, getMessagesEffect } from '../store/effects/student';
import ConversationItem from '../components/ConversationItem';
import { ApplicationState } from '../store/types/index';
import MessageItem from '../components/MessageItem';
import messages from '@/i18n/messages';
import Input from '@/components/basics/Input';
import Button from '../components/basics/Button';
import toast from 'react-hot-toast';

const Messages = () => {

      // Store
      const { student: { messages, conversations } } = useSelector((state: ApplicationState) => state)

      // States
      const [selectedExam, setSelectedExam] = useState(null)
      const [loadingSendMessage, setLoadingSendMessage] = useState(false)
      const [inputValue, setInputValue] = useState("");
      const [loadingMessages, setLoadingMessages] = useState(false)

      // Hooks
      const router = useRouter()
      const dispatch = useDispatch()

      // Functions
      const sendMessage = (): void => {
            dispatch(
              sendMessageEffect({
                payload: {
                  conversation_id: messages.data?.[0]?.conversation_id,
                  receiver_uuid: messages.data?.[0]?.receiver_id,
                  text: inputValue,
                },
                setLoading: setLoadingSendMessage,
                successCb: () => {
                  setInputValue("")
                  dispatch(
                        getMessagesEffect({
                          range: {conversation_uuid: messages.data?.[0]?.conversation_id},
                          setLoading: setLoadingMessages,
                          successCb: () => undefined,
                          failCb: (data: any) =>
                            toast.error(data?.detail || "Something went wrong!"),
                        })
                      );
                },
                failCb: (data: any) =>
                  toast.error(data?.detail || "Something went wrong!"),
              })
            );
          };

      useEffect(() => {
        dispatch(getConversationsEffect({
            setLoading: setLoadingSendMessage,
            successCb: () => undefined,
            failCb: () => undefined,
        }))
        // eslint-disable-next-line
      }, [])
      

  return (
    <DashboardLayout title="Profile">
      <div className='px-12 mt-4'>
            <h2>
            Message
            </h2>
            
            <div className="w-full bg-white">
                  <div className='flex h-screen' style={{maxHeight: "calc(100vh - 200px)"}}>
                        <div className='w-full max-w-xs flex-shrink-0 border-r p-4 flex flex-col'>
                              <h2 className='mb-4'>Discussions</h2>
                              <div className='space-y-4 overflow-y-auto flex-grow'>
                                    { conversations?.data?.map(conv => (
                                          <ConversationItem key={conv?.uuid} conversation={conv} />
                                    )) }    
                              </div>
                        </div>
                        <div className='flex-grow flex flex-col h-full'>
                              <div className='px-4 py-2 border-b'>
                                    <h2>Paul Messaga</h2>
                              </div>
                              <div className='flex-grow flex flex-col overflow-y-auto'>
                                    <div className='flex-grow space-y-4 p-4'>
                                          {messages.data.map(message => (          
                                          <MessageItem
                                                message={message}
                                                key={message.uuid}
                                          />
                                    ))}
                                    </div>
                              </div>
                              <div className='bg-gray-50'>
                                    <div className='flex gap-4 p-4'>
                                          <textarea className='border flex-grow' 
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                          />
                                          <Button loading={loadingSendMessage} onClick={sendMessage}>Send</Button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

      </div>
    </DashboardLayout>
  )
}

export default Messages