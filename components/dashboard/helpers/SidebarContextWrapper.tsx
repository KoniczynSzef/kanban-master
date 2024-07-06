"use client";

import { SidebarContext } from "@/context/sidebar/sidebar-context";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const SidebarContextWrapper: React.FC<Props> = (props) => {
    const [isExpanded, setIsExpanded] = React.useState(true);
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <SidebarContext.Provider
            value={{ isExpanded, setIsExpanded, isHovered, setIsHovered }}
        >
            {props.children}
        </SidebarContext.Provider>
    );
};
