interface InputRodiaoProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isActive?: boolean,
    label?: string
    border?: string
}
const InputRadio = ({className, border, isActive, label, ...otherProps}:InputRodiaoProps) => {
    return (
        <div className="flex space-x-2 items-center">
            <label htmlFor={otherProps.id} className={`relative block w-4 h-4 rounded-full border-2 ${border || "border-white"}`}>
                <input className={`hidden ${className}`} {...otherProps} type="radio" />
                {isActive && <div className={`absolute h-2 w-2 rounded-full ${border ? `bg-${border.split("-")[1]}` : "bg-white"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>}
            </label>
            <label htmlFor={otherProps.id}>{label}</label>
        </div>
    )
}

export default InputRadio
