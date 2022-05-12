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
  handleClose: MouseEventHandler<HTMLImageElement>;
  type?: string;
  className?: string;
  children: ReactNode | ReactNode[]
}

const Modal = ({ handleClose, type, children, className }: ModalProps) => {

  return (
    <Backdrop onClick={handleClose}>
        <div onClick={(e) => e.stopPropagation()} className={`bg-white w-full my-4 overflow-auto h-full rounded-xl ${className}`} style={{maxHeight: "calc(100vh - 60px)"}}>
        <div className="p-8 flex flex-col">
            {children}
          </div>
        </div>
    </Backdrop>
  );
};

export default Modal;
