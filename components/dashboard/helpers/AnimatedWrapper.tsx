"use client";

import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { motion } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const AnimatedWrapper: React.FC<Props> = (props) => {
    const { isExpanded } = React.useContext(SidebarContext);

    return (
        <motion.div
            className="w-full mr-32 mb-64"
            initial={{
                y: -25,
                opacity: 0,
                marginLeft: "24rem",
            }}
            animate={{
                y: 0,
                opacity: 1,
                marginLeft: isExpanded ? "24rem" : "8rem",
            }}
            // id="page"
        >
            {props.children}
        </motion.div>
    );
};
