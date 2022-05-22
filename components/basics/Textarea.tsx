import { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    invalid?: boolean,
    placeholderColor?: string
}

const TextArea = ({invalid, placeholderColor, className, ...otherProps}:TextareaProps) => {
    return (
        <textarea className={`${invalid ? "placeholder-red-400" : `placeholder-${placeholderColor || "white"}`} intent px-6 py-4 outline-none rounded-xl w-full bg-[#515153] text-white ${invalid ? "border-red-400" : ""} ${invalid ? "text-red-400" : "text-black"} text-sm ${className}`} style={{minHeight: 100, ...(otherProps?.style || {})}} {...otherProps} />
    )
}

export default TextArea
