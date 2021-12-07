import React from 'react'
import { TypographyProps } from '../../../types/types';

function H4({className, children, ...other}: TypographyProps):JSX.Element {
    if (!children) console.error('missing children prop');
    
    return (
        <h4 {...other} className={`${className}`}>
            {children}
        </h4>
    )
}

export default H4
