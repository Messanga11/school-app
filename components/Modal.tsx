import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import Form from "./Form";
import { useRecoilValue } from "recoil";
import { getPostState } from "../atoms/postAtom";
import Post from "./Post";
import { MouseEventHandler, ReactNode } from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

interface ModalProps {
  handleClose: Function;
  type?: string;
  className?: string;
  children: ReactNode | ReactNode[]
}

const Modal = ({ handleClose, type, children, className }: ModalProps) => {

  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-[#fdfdfd] w-full my-4 overflow-auto relative rounded-md ${className}`} style={{ maxHeight: "calc(100vh - 60px)" }}>
        <button
          onClick={() => {
            handleClose instanceof Function && handleClose()
          }}
          className="transform transition duration-100 hover:scale-95 focus:scale-90 appearance-none cursor-pointer absolute -right-2 -top-2 h-8 w-8 text-lg font-bold flex justify-center items-center rounded-md bg-gray-100"
        >
          X
        </button>
        <div className="p-8 flex flex-col">
          {children}
        </div>
      </div>
    </Backdrop>
  );
};

export default Modal;
