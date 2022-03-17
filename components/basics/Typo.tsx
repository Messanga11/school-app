import React from "react"

interface TypoProps  {
    type: "p" | "small" | "h1" | "h2",
    className?: string,
    children?: React.ReactNode[] | React.ReactNode | string
}

const Typo = ({type, children, ...otherProps}: TypoProps) => {

    const classNames = {
        p: "text-base",
        small: "text-sm",
        h1: "text-2xl font-bold",
        h2: "text-xl font-bold"
    }

    
    return React.createElement(type, {
        ...otherProps,
        className: `${classNames[type]} ${otherProps.className}`
    }, children)
}

export default Typo