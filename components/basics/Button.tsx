interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: string,
    color?: string,
    loading?:boolean,
    filled?:boolean
}

const Button = ({type, loading, children, className, color, filled, ...otherProps}:ButtonProps) => {
    return (
        <button type="submit" disabled={loading} className={`h-10 rounded-full px-4 text-sm hover:bg-opacity-100 ${filled ? "text-[#111] bg-opacity-100" : "bg-opacity-0"} border hover:text-[#111] ${ filled ? "" : `${color==="secondary" ? "bg-white text-white border-white" : color==="dark" ? "bg-gray-700 text-gray-700 border-gray-700" : color==="success" ? "bg-green-500 text-green-500 border-green-500" : color==="danger" ? "bg-red-500 text-red-500 border-red-500" : "bg-[#e2c78c] text-[#e2c78c] border-[#e2c78c]"}`} ${className  || ""}${loading ? " opacity-50" : ""}`} {...otherProps}>{loading ? "Loading..." : children}</button>
    )
}

export default Button
