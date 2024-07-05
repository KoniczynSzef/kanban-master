"use client";

import HomeLink from "@/components/navbar/HomeLink";
import { LogoutButton } from "@/components/navbar/auth/LogoutButton";
import { ToggleMode } from "@/components/navbar/mode/ToggleMode";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { SkipLink } from "@/components/navbar/SkipLink";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { ToggleExpanded } from "./ToggleExpanded";

import { motion } from "framer-motion";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    return (
        <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
            <SkipLink />
            <motion.aside
                className="top-0 bottom-0 fixed bg-slate-50/25 dark:bg-slate-900/25 flex flex-col py-16 px-12"
                initial={{ width: "20rem", padding: "4rem 3rem" }}
                animate={{
                    width: isExpanded ? "20rem" : "5rem",
                    padding: isExpanded ? "4rem 3rem" : "4rem 1rem",
                }}
                transition={{ duration: 0.2 }}
            >
                <ToggleExpanded />

                {isExpanded && <HomeLink className="text-center" />}

                <ul className="my-16 flex flex-col gap-3">
                    {SIDEBAR_LINKS.map((link) => (
                        <SidebarLink key={crypto.randomUUID()} {...link} />
                    ))}
                </ul>

                <div className="flex flex-col items-center gap-4 mt-auto">
                    <ToggleMode />
                    <LogoutButton isSidebarExpanded={isExpanded} />
                </div>
            </motion.aside>
        </SidebarContext.Provider>
    );
};