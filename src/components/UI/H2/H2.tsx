import React from 'react'
import { TypographyProps } from '../../../types/types';

function H2({className, children, ...other}: TypographyProps): JSX.Element {
    if (!children) console.error('missing children prop');

    return (
        <h2 {...other} className={`${className}`}>
            {children}
        </h2>
    )
}

export default H2
