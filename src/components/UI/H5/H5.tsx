import React from 'react'
import { TypographyProps } from '../../../types/types';

function H5({className, children, ...other}: TypographyProps):JSX.Element {
    if (!children) console.error('missing children prop');

    return (
        <h5 {...other} className={`${className}`}>
            {children}
        </h5>
    )
}

export default H5