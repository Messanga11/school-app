import Modal from "../Modal"
import ReactPlayer from 'react-player'

interface Props {
    open?: boolean;
    url?: string;
    handleClose: Function;
}

const VideoPlayer:React.FC<Props> = ({open, url, handleClose}) => {

    return (
         open ? (
         <Modal className="bg-opacity-0 flex items-center justify-center w-auto" handleClose={handleClose}>
            <div>
                <ReactPlayer url={url} playing />
            </div>
        </Modal>
        ) : null
    )

}

export default VideoPlayer