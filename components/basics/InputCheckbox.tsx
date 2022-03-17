interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rainbow?: boolean,
    label?: string
    border?: string
    labelClassName?: string
}
const InputCheckbox = ({className, border, label, rainbow, labelClassName, ...otherProps}:InputCheckboxProps) => {
    return (
        <div className="flex space-x-2 items-center">
            <label htmlFor={otherProps.id} className={`relative block w-4 h-4 rounded-sm border-2 cursor-pointer ${border || "border-black"}`}>
                <input className={`hidden ${className}`} {...otherProps} type="checkbox" checked={otherProps.checked} />
                {otherProps?.checked && <div className={`absolute h-4 w-4 animate-none bg-black`}></div>}
            </label>
            <label className={`cursor-pointer ${` ${labelClassName || ""}`}`} htmlFor={otherProps.id}>{label}</label>
        </div>
    )
}

export default InputCheckbox
