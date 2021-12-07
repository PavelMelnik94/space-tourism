import React from 'react'

function Text({className, children}) {
    return (
        <span className={`text-basic ${className}`}>
                {children}
              </span>
    )
}

export default Text
