"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {}

export const Overlay: React.FC<Props> = () => {
    const path = usePathname();

    console.log(path);

    if (path === "/dashboard") {
        return null;
    }

    return (
        <div
            className="w-full h-[36rem] bg-red-600 absolute overlay__gradient"
            aria-description="Overlay just for the website to look better"
        />
    );
};
