import React from "react";

export interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string,
    children?: React.ReactNode
}

export interface RoundButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    
}

export interface MainProps {
    className?: string,
    children?: React.ReactNode
}