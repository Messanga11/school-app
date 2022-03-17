import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    children: any
}

const Button = ({children, className, ...props}:ButtonProps) => {

    return (
        <button  className={`py-2 px-4 text-white bg-orange-600 font-semibold rounded-md text-sm ${className || ""}`} {...props}>
            {children}
        </button>
    )

}

export default Button