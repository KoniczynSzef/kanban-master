import React from "react";

interface Props {}

export const Overlay: React.FC<Props> = () => {
    return (
        <div
            className="w-full h-[24rem] absolute overlay__gradient"
            aria-description="Overlay just for the website to look better"
        />
    );
};
