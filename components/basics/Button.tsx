import Loading from "./Loading"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: string,
    loading?:boolean
}

const Button = ({type, loading, children, className, ...otherProps}:ButtonProps) => {
    return (
        <button type="submit" disabled={loading} className={`py-2 px-4 text-white bg-orange-600 font-semibold rounded-md text-sm ${className  || ""}${loading ? " opacity-50" : ""}`} {...otherProps}>{loading ? <Loading /> : children}</button>
    )
}

export default Button
