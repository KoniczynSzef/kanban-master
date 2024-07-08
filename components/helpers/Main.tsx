"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Main: React.FC<Props> = (props) => {
    const path = usePathname();

    return (
        <main
            id="main-content"
            className={`flex flex-col gap-48 items-center ${
                !path.startsWith("/dashboard") ? "my-36" : "my-12"
            }`}
        >
            {props.children}
        </main>
    );
};
