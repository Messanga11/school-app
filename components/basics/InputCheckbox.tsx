interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rainbow?: boolean,
    label?: string
    border?: string
    name?: string
    labelClassName?: string
}
const InputCheckbox = ({className, border, label, rainbow, name, labelClassName, ...otherProps}:InputCheckboxProps) => {
    return (
        <div className="my-2">
            <input id={otherProps?.id || name} name={name} className={`hidden ${className}`} {...otherProps} type="checkbox" checked={otherProps.checked} />
            <label className={`flex gap-x-2 items-center cursor-pointer text-xs text-white ${` ${labelClassName || ""}`}`} htmlFor={otherProps.id || name}>
            <div className={`h-4 w-4 animate-none text-sm font-light rounded-sm ${otherProps?.checked ? 'bg-white' : 'border border-white'} `}></div>
                {label}
            </label>
        </div>
    )
}

export default InputCheckbox
