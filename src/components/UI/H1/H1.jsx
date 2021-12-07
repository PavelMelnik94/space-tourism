import React from 'react'

function H1({className, children}) {
    return (
        <h1 className={`${className}`}>
            {children}
        </h1>
    )
}

export default H1
