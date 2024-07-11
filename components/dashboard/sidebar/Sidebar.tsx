"use client";

import HomeLink from "@/components/navbar/HomeLink";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { SkipLink } from "@/components/navbar/SkipLink";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { ToggleExpanded } from "./ToggleExpanded";

import { motion } from "framer-motion";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    const { setIsHovered, isExpanded } = React.useContext(SidebarContext);

    return (
        <>
            <SkipLink />
            <motion.aside
                className="top-0 bottom-0 fixed bg-slate-50/25 dark:bg-slate-900/25 flex flex-col py-16 px-12"
                initial={{ width: "20rem", padding: "4rem 3rem" }}
                animate={{
                    width: isExpanded ? "20rem" : "5rem",
                    padding: isExpanded ? "4rem 3rem" : "4rem 1rem",
                }}
                transition={{ duration: 0.2 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <ToggleExpanded />

                {isExpanded && <HomeLink className="text-center" />}

                <ul className="my-16 flex flex-col gap-2">
                    {SIDEBAR_LINKS.map((link) => (
                        <SidebarLink key={crypto.randomUUID()} {...link} />
                    ))}
                </ul>
            </motion.aside>
        </>
    );
};
