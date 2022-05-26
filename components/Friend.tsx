import { Student } from "@/store/types";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./basics/Button";
import {
  sendInvitationEffect,
  getInvitationsEffect,
  sendMessageEffect,
  acceptInvitationEffect,
  deleteFriendEffect,
} from "../store/effects/student";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import Input from "@/components/basics/Input";
import toast from "react-hot-toast";
import DefaultImageComponent from './DefaultImageComponent';
import TextArea from "./basics/Textarea";
import Image from "next/image";

interface StudentProps {
  friend: Student;
  invitationUuid?: string;
  getData?: Function;
  accepted?: boolean;
  setStudentToSendMessage?: (student:Student) => void;
}

const Friend = ({
  friend,
  invitationUuid,
  getData,
  accepted,
}: StudentProps) => {

  // Hooks
  const dispatch = useDispatch();

  // States
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Functions
  const sendInvitation = (): void => {
    dispatch(
      sendInvitationEffect({
        payload: {
          second_user_uuid: friend.uuid,
        },
        setLoading,
        successCb: () => toast.success("Your invitation has been sent!"),
        failCb: (data: any) =>
          toast.error(data?.detail || "Something went wrong!"),
      })
    );
  };

  const acceptInvitation = (): void => {
    dispatch(
      acceptInvitationEffect({
        payload: {
          invitation_uuid: invitationUuid,
        },
        setLoading,
        successCb: () => {
          toast.success(`You accepted the invitation of ${friend?.first_name}`);

          (getData || (() => null))();
        },
        failCb: (data: any) => {
          toast.error(data?.detail || "Something went wrong!");
        },
      })
    );
  };

  const deleteFriend = (): void => {
    dispatch(
      deleteFriendEffect({
        payload: {
          invitation_uuid: invitationUuid,
        },
        setLoading,
        successCb: () => {
          toast.success(`You accepted the invitation of ${friend?.first_name}`);

          (getData || (() => null))();
        },
        failCb: (data: any) => {
          toast.error(data?.detail || "Something went wrong!");
        },
      })
    );
  };

  const sendMessage = (): void => {
    dispatch(
      sendMessageEffect({
        payload: {
          receiver_uuid: friend.uuid,
          text: inputValue,
        },
        setLoading: setLoadingMessage,
        successCb: () => {
          setInputValue("")
          setShowModal(false)
        },
        failCb: (data: any) =>
          toast.error(data?.detail || "Something went wrong!"),
      })
    );
  };

  return (
    <div className="h-96 flex flex-col justify-between items-center w-full bg-[#fff] border border-[#eee] overflow-hidden hover:shadow-md shadow-gray-50 focus:outline-none focus:shadow-md transition duration-100 rounded-xl">
      {showModal && (
        <Modal
          className="max-w-md mx-auto"
          handleClose={() => setShowModal(false)}
        >
          <div>
            <h2 className="text-white">Write a message to {friend?.first_name}</h2>
            <p className="mb-8">Type your message in the input bellow</p>
            <TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              loading={loadingMessage}
              className="mt-8 w-full"
              onClick={sendMessage}
            >
              Send
            </Button>
          </div>
        </Modal>
      )}
      {friend?.image_url ? (
        <div className="relative h-2/3 w-full">
          <Image
            width={"100%"}
            height={"100%"}
            layout="fill"
            className="object-cover"
            src={friend?.image_url}
            alt={friend?.first_name}
            loading="lazy"
          />
        </div>
      ) : (
        <DefaultImageComponent />
      )}
      <div className="p-4 w-full bg-gray-00">
        <div className="flex gap-3 items-center">
          <p className="text-lg mb-2">
            <span>{friend?.first_name}</span>{" "}
            <span className="font-bold">{friend?.last_name}</span>
          </p>
        </div>
        <div className={`flex flex-col w-full gap-4 ${friend?.is_friend ? "flex-col-reverse" : ""}`}>
          <Button color="secondary" onClick={() => setShowModal(true)}>
            Message
          </Button>
          {!friend?.is_friend ? <Button
            loading={loading}
            onClick={() => {
              if (!!accepted) {
                deleteFriend();
              } else {
                if (!invitationUuid) {
                  sendInvitation();
                } else {
                  acceptInvitation();
                }
              }
            }}
            color={
              !!accepted ? "danger" : !!invitationUuid ? "success" : undefined
            }
            className="w-full"
          >
            {!!accepted
              ? "Delete friend"
              : !!invitationUuid
              ? "Accept invitaion"
              : "Send invitation"}
          </Button> : (
            <Button style={{opacity: 0}}></Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Friend;
