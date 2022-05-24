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
        <div className={`overflow-hidden bg-transparent ${invalid ? "text-red-400" : "text-[#515154]"} ${className ? ` ${className}` : ""}`}>
            {label && <label htmlFor={id} className={`text-xs last:focus:border-purple-600 mb-2 text-[#515154] ${invalid ? "text-red-400" : ""}`}>{label}</label>}
            <div className={`rounded-full intent hover:shadow-none shadow-sm h-10 flex items-center w-full bg-[#efefef] overflow-hidden ${invalid ? "border-red-400" : "border-[#eee]"}   text-lg p-0 mt-1`} style={style}>
            <input type={type === "password" && showPassword ? "text" : type || "text"} className={`flex-grow h-10 block ${invalid ? "placeholder-red-400" : `placeholder-${placeholderColor || "gray-900"}`} outline-none text-sm px-6 w-full h-full bg-[#efefef] text-[#515154]`}  {...otherProps} />
            { !showPassword && type === "password" && (
                <Icon height={25} className="cursor-pointer mx-3" color="#515154" icon="ant-design:eye-filled" onClick={() => setShowPassword(true)} />
            ) }
            { showPassword && type === "password" && (
                <Icon height={25} className="cursor-pointer mx-3" color="#515154" icon="ant-design:eye-invisible-filled" onClick={() => setShowPassword(false)} />
            ) }
        </div>
        </div>
    )
}

export default Input
