import { InputHTMLAttributes, useState } from "react"
import { Icon } from '@iconify/react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean,
    placeholderColor?: string,
    label?: string
}

const Input = ({className, placeholderColor, id, invalid, type, label, style, ...otherProps}:InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className={`${invalid ? "border-red-400" : ""} bg-transparent ${invalid ? "text-red-400" : "text-black"} ${className ? ` ${className}` : ""}`}>
            {label && <label htmlFor={id} className="text-sm ml-1 font-semibold">{label}</label>}
            <div className={`hover:shadow-md border intent h-10 flex items-center w-full  text-sm p-0`} style={style}>
            <input type={type === "password" && showPassword ? "text" : type || "text"} className={`flex-grow rounded-sm focus:shadow-md ${invalid ? "placeholder-red-400" : `placeholder-${placeholderColor || "gray-900"}`} outline-none py-2 text-md px-4 w-full h-full bg-transparent`}  {...otherProps} />
            { !showPassword && type === "password" && (
                <Icon height={25} className="cursor-pointer mx-3" icon="ant-design:eye-filled" onClick={() => setShowPassword(true)} />
            ) }
            { showPassword && type === "password" && (
                <Icon height={25} className="cursor-pointer mx-3" icon="ant-design:eye-invisible-filled" onClick={() => setShowPassword(false)} />
            ) }
        </div>
        </div>
    )
}

export default Input
