import React from 'react'

interface ContainerProps {
  children?: any,
  className?: string
}

const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={`p-4 w-full max-w-7xl mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container