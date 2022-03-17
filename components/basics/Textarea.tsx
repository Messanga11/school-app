import { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    invalid?: boolean,
    placeholderColor?: string
}

const TextArea = ({invalid, placeholderColor, className, ...otherProps}:TextareaProps) => {
    return (
        <textarea className={`${invalid ? "placeholder-red-400" : `placeholder-${placeholderColor || "white"}`} py-1 intent px-4 outline-none border rounded-xl ${invalid ? "border-red-400" : ""} bg-transparent ${invalid ? "text-red-400" : "text-black"} text-sm ${className}`} {...otherProps} />
    )
}

export default TextArea
