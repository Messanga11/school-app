import React from 'react'
import Input from './basics/Input'
import Typo from './basics/Typo'
import Button from './Button'

interface Props {
    handleInputChange?: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    name: string,
    isUpdate?: boolean,
    addFunc: React.MouseEventHandler<HTMLButtonElement>
}

const TopicInput:React.FC<Props> = ({handleInputChange, value, addFunc, name, isUpdate}) => {
  return (
    <div className="flex flex-col border rounded-md p-4 my-4 gap-4">
        <Typo type="small" className="font-semibold">{isUpdate ? "Update" : "Add"} a topic</Typo>
        <div className="">
        <Typo type="small">Title</Typo>
            <Input
            name={name}
            onChange={handleInputChange}
            value={value}
            className="flex-grow" />
        </div>
            <Button
            type="button"
            onClick={addFunc}
            className="text-center"><span>{isUpdate ? "Update" : "Add"}</span></Button>
    </div>
  )
}

export default TopicInput