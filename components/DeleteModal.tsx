import React from 'react'
import Button from './basics/Button';
import Modal from './Modal'

interface Props {
    message: string;
    onAccept: Function;
    onDecline: Function;
}

const DeleteModal:React.FC<Props> = ({message, onAccept, onDecline}) => {
  return (
    <Modal handleClose={() => undefined} type={"dropIn"} className="max-w-lg">
        <div>
            <div>
                <p>
                    {message}
                </p>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <Button color='danger' onClick={() => onDecline()}>
                    Decline
                </Button>
                <Button color='success' onClick={() => onAccept()}>
                    Accept
                </Button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteModal