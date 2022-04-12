interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: string,
    color?: string,
    loading?:boolean
}

const Button = ({type, loading, children, className, color, ...otherProps}:ButtonProps) => {
    return (
        <button type="submit" disabled={loading} className={`h-10 px-4 bg-opacity-90 text-gray-50 ${color==="secondary" ? "bg-purple-500" : color==="success" ? "bg-green-500" : color==="danger" ? "bg-red-500" : "bg-orange-500"} text-sm hover:bg-opacity-100 font-semibold ${className  || ""}${loading ? " opacity-50" : ""}`} {...otherProps}>{loading ? "Loading..." : children}</button>
    )
}

export default Button
