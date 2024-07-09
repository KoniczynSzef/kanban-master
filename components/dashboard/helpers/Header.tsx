import React from "react";

interface Props {
    pageTitle: string;
    description: string;
}

export const Header: React.FC<Props> = (props) => {
    return (
        <header id="page">
            <h1 className="font-semibold text-2xl">{props.pageTitle}</h1>
            <p className="mt-2 text-muted-foreground">{props.description}</p>
        </header>
    );
};
