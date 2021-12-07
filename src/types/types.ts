import React from "react";


//general
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



//data json interface

    //crew
export interface CrewData {
    name: string,
    images?: {
        png?: string,
        webp?: string,
    };
    role: string,
    bio: string,
}

    //destination
export interface DestinationData  {
    name: string,
    image?: {},
    description: string,
    distance: string,
    travel: string,
}


    //technology 

export interface TechnologyData {
    name: string;
    images?: {
        portrait?: string;
        landscape?: string;
    };
    description: string;
}