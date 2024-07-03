"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const NavbarClientWrapper: React.FC<Props> = (props) => {
    const path = usePathname();

    if (path === "/dashboard") {
        console.log("Dashboard");

        return null;
    }

    return props.children;
};
