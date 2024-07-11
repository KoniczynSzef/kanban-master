"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Main: React.FC<Props> = (props) => {
    const path = usePathname();

    const isDashboard = path.startsWith("/dashboard");

    return (
        <main
            id={"main-content"}
            className={`flex flex-col gap-48 items-center ${
                isDashboard ? "my-0" : "my-36"
            }`}
        >
            {props.children}
        </main>
    );
};
