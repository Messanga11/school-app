interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rainbow?: boolean,
    label?: string
    border?: string
    name?: string
    labelClassName?: string
}
const InputCheckbox = ({className, border, label, rainbow, name, labelClassName, ...otherProps}:InputCheckboxProps) => {
    return (
        <div>
            <input id={otherProps?.id || name} name={name} className={`hidden ${className}`} {...otherProps} type="checkbox" checked={otherProps.checked} />
            <label className={`flex gap-x-2 items-center cursor-pointer ${` ${labelClassName || ""}`}`} htmlFor={otherProps.id || name}>
            <div className={`h-4 w-4 animate-none rounded-sm ${otherProps?.checked ? 'bg-black' : 'border border-black'} `}></div>
                {label}
            </label>
        </div>
    )
}

export default InputCheckbox
