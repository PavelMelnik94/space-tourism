import React from "react";

export interface TypographyProps
extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string,
    children?: React.ReactNode
}