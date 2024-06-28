import React from "react";

interface Props {}

export const Overlay: React.FC<Props> = () => {
    return (
        <div
            className="w-full h-[36rem] bg-red-600 absolute overlay__gradient"
            aria-description="Overlay just for the website to look better"
        />
    );
};
