"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {}

export const Overlay: React.FC<Props> = () => {
    const path = usePathname();

    if (path === "/dashboard") {
        return null;
    }

    return (
        <div
            className="w-full h-[36rem] absolute overlay__gradient"
            aria-description="Overlay just for the website to look better"
        />
    );
};
