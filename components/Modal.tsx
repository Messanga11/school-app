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
  type: string;
  children: ReactNode | ReactNode[]
}

const Modal = ({ handleClose, type, children }: ModalProps) => {

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-xl flex flex-col justify-center bg-white w-full max-w-lg mx-6 overflow-y-auto max-h-screen"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>
            <div>
              <div className="p-4">
                {children}
              </div>
            </div>
          </div>
        </motion.div>
    </Backdrop>
  );
};

export default Modal;
