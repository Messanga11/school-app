import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import LoadingComp from "@/components/LoadingComp";

interface Props {
    guardian?: boolean
}

const MessagePage: React.FC<Props> = ({ guardian }) => {

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
                    receiver_uuid: guardian ? "ADMIN" : (userInfos?.uuid || ""),
                    text: inputValue,
                },
                setLoading: setLoadingSendMessage,
                successCb: () => {
                    setInputValue("");
                    dispatch(
                        getMessagesEffect({
                            range: { conversation_uuid:  guardian ? "ADMIN" : (currentConversation?.uuid || "") },
                            setLoading: setLoadingMessages,
                            successCb: () => undefined,
                            failCb: (data: any) =>
                                toast.error(typeof data?.detail === "string" ? data?.detail : "Something went wrong!"),
                        })
                    );
                },
                failCb: (data: any) =>
                    toast.error(typeof data?.detail === "string" ? data?.detail : "Something went wrong!"),
            })
        );
    };

    const openConversation = (conversation: (Conversation | null) = null, noLoading = false) => {
        dispatch(
            getMessagesEffect({
                range: { conversation_uuid: guardian ? "ADMIN" : (conversation?.uuid || "") },
                setLoading: noLoading ? () => undefined : setLoadingMessages,
                successCb: () => {
                    setCurrentConversation(conversation);
                },
                failCb: (data: any) =>
                    toast.error(typeof data?.detail === "string" ? data?.detail : "Something went wrong!"),
            })
        );
    };

    const getConversations = (noLoading = false) => {
        dispatch(
            getConversationsEffect({
                setLoading: noLoading ? () => undefined : setLoadingConversation,
                successCb: () => undefined,
                failCb: () => undefined
            })
        );
    };

    useEffect(() => {
        if (!guardian) {
            getConversations();

        } else {
            openConversation(null)
        }
        const id = setInterval(() => {
            if (!guardian) {
                getConversations(true);
            } else {
                openConversation(null)
            }
            if (!!currentConversation?.uuid && !loadingSendMessage) {
                openConversation(currentConversation);
            }
        }, 3000);
        return () => clearInterval(id);
        // eslint-disable-next-line
    }, []);
    return (
        <Container>
            <div>
                <h2 className="text-black mb-4">Message</h2>
                <div className="w-full bg rounded-md overflow-hidden shadow-sm bg-[#fdfdfd]">
                    <div
                        className="flex h-screen"
                        style={{ maxHeight: "calc(100vh - 200px)" }}
                    >
                        {!guardian && (
                            <div className="w-full max-w-xs flex-shrink-0 border-r border-[#eee] p-4 flex flex-col">
                                <h2 className="mb-4 text-white">Discussions</h2>
                                <div className="space-y-4 overflow-y-auto flex-grow">
                                    {!loadingMessages && conversations?.data?.map((conv) => (
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
                        )}
                        <div className="flex-grow flex flex-col h-full">
                            <div>
                                <LoadingComp loading={loadingConversation} />
                                {!loadingMessages && !guardian && conversations?.data?.length === 0 && (
                                    <p className="text-center mt-8">Go to friend section and message to somebody</p>
                                )}
                            </div>
                            {(currentConversation || guardian) ? (
                                <Fragment>
                                    <div className="p-4 border-b">
                                        <h2 className="text-black">{currentConversation?.members?.find(m => m?.uuid !== userInfos?.uuid)?.first_name} {currentConversation?.members?.find(m => m?.uuid !== userInfos?.uuid)?.last_name} {guardian && "Administration"}</h2>
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
                                                className="border flex-grow p-4 rounded-md text-black"
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
    )
}

export default MessagePage