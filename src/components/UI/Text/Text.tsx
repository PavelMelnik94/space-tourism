import React from 'react'
import { TypographyProps } from '../../../types/types';

function Text({className, children, ...other}: TypographyProps): JSX.Element {
    if (!children) console.error('missing children prop');
    
    return (
        <span {...other} className={`text-basic ${className}`}>
                {children}
              </span>
    )
}

export default Text
