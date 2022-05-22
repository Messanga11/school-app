import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  getConversationsEffect,
  sendMessageEffect,
  getMessagesEffect,
} from "../store/effects/student";
import ConversationItem from "../components/ConversationItem";
import { ApplicationState } from "../store/types/index";
import MessageItem from "../components/MessageItem";
import messages from "@/i18n/messages";
import Input from "@/components/basics/Input";
import Button from "../components/basics/Button";
import toast from "react-hot-toast";
import { Conversation } from "../store/types/Student";
import Container from "../components/Container";
import { Fragment } from 'react';

const Messages = () => {
  // Store
  const {
    student: { messages, conversations },
    auth: { userInfos },
  } = useSelector((state: ApplicationState) => state);

  // States
  const [selectedExam, setSelectedExam] = useState(null);
  const [loadingSendMessage, setLoadingSendMessage] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentConversation, setCurrentConversation] =
    useState<Conversation | null>(null);
  const [loadingMessages, setLoadingMessages] = useState<boolean>(false);
  const [loadingConversation, setLoadingConversation] =
    useState<boolean>(false);

  // Hooks
  const router = useRouter();
  const dispatch = useDispatch();

  // Functions
  const sendMessage = (): void => {
    dispatch(
      sendMessageEffect({
        payload: {
          conversation_id: currentConversation?.uuid,
          receiver_uuid: userInfos?.uuid || "",
          text: inputValue,
        },
        setLoading: setLoadingSendMessage,
        successCb: () => {
          setInputValue("");
          dispatch(
            getMessagesEffect({
              range: { conversation_uuid: currentConversation?.uuid },
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

  const openConversation = (conversation: Conversation, noLoading = false) => {
    dispatch(
      getMessagesEffect({
        range: { conversation_uuid: conversation?.uuid || "" },
        setLoading: noLoading ? () => undefined : setLoadingMessages,
        successCb: () => {
          setCurrentConversation(conversation);
        },
        failCb: (data: any) =>
          toast.error(data?.detail || "Something went wrong!"),
      })
    );
  };

  const getConversations = (noLoading = false) => {
    dispatch(
      getConversationsEffect({
        setLoading: noLoading ? () => undefined : setLoadingConversation,
        successCb: () => undefined,
        failCb: () => undefined,
      })
    );
  };

  useEffect(() => {
    getConversations();
    const id = setInterval(() => {
      getConversations();
      if (!!currentConversation?.uuid && !loadingSendMessage) {
        openConversation(currentConversation);
      }
    }, 3000);

    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, []);

  return (
    <DashboardLayout title="Profile">
      <Container>
        <div>
          <h2 className="text-white mb-4">Message</h2>
          <div className="w-full bg rounded-xl overflow-hidden shadow-md bg-[#2e2e2f]">
            <div
              className="flex h-screen"
              style={{ maxHeight: "calc(100vh - 200px)" }}
            >
              <div className="w-full max-w-xs flex-shrink-0 border-r border-black p-4 flex flex-col">
                <h2 className="mb-4 text-white">Discussions</h2>
                <div className="space-y-4 overflow-y-auto flex-grow">
                  {conversations?.data?.map((conv) => (
                    <ConversationItem
                      key={conv?.uuid}
                      conversation={conv}
                      setCurrentConversation={setCurrentConversation}
                      setLoading={setLoadingConversation}
                      currentConversation={currentConversation}
                      openConversation={openConversation}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-grow flex flex-col h-full">
                {currentConversation ? (
                  <Fragment>
                        <div className="p-4 border-b">
                      <h2>{currentConversation?.members?.find(m => m?.uuid !== userInfos?.uuid)?.first_name} {currentConversation?.members?.find(m => m?.uuid !== userInfos?.uuid)?.last_name}</h2>
                    </div>
                    <div className="flex-grow flex flex-col overflow-y-auto">
                      <div className="flex-grow space-y-4 p-4">
                        {messages.data.map((message) => (
                          <MessageItem message={message} key={message.uuid} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50">
                      <div className="flex gap-4 p-4">
                        <textarea
                          className="border flex-grow p-4 rounded-md"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button loading={loadingSendMessage} onClick={sendMessage}>
                          Send
                        </Button>
                      </div>
                    </div>
                  </Fragment>
                ) : (
                  <div className="flex justify-center items-center h-full">
                  <h2 className="text-white">Select a conversation</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default Messages;
