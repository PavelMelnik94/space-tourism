import React from 'react'
import { TypographyProps } from '../../../types/types';

function H3({children, className, ...other}: TypographyProps): JSX.Element {
    if (!children) console.error('missing children prop');
    
    return (
        <h3 {...other} className={`${className}`}>
            {children}
        </h3>
    )
}

export default H3
