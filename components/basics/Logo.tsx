const Logo = ({className}: {className?: string}) => {
    return (
        <p className={`${className? `${className} ` : ""}text-3xl `}><span className="font-black">Sure</span><span className="font-light">Path</span></p>
    )
}

export default Logo
