import React from 'react';
import { TypographyProps } from '../../../types/types'

function H1({className, children, ...other}: TypographyProps): JSX.Element {
    if (!children) null;

    return (
        <h1 {...other} className={`${className}`}>
            {children}
        </h1>
    )
}

export default H1
