import React from 'react'

function H3({children, className}) {
    return (
        <h3 className={`${className}`}>
            {children}
        </h3>
    )
}

export default H3
