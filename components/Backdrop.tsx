import { motion } from "framer-motion";

interface Props {
  children?: any;
  onClick: Function
}

const Backdrop:React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick()}
      style={{zIndex: 999}}
      className="fixed top-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
