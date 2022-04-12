import React from 'react'
import Button from './Button';
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
                <Button onClick={() => onDecline()} className='bg-red-500'>
                    Decline
                </Button>
                <Button className='bg-green-500' onClick={() => onAccept()}>
                    Accept
                </Button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteModal