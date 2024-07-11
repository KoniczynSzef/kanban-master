"use client";

import { Button } from "@/components/ui/button";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import React from "react";

interface Props {}

export const ToggleExpanded: React.FC<Props> = () => {
    const { setIsExpanded, isExpanded, isHovered, setIsHovered } =
        React.useContext(SidebarContext);

    function handleExpandOrCollapse() {
        setIsExpanded(!isExpanded);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <Button
                variant={"ghost"}
                onClick={handleExpandOrCollapse}
                size={"icon"}
                className={`size-8 absolute top-2 ${
                    isExpanded ? "right-2" : "right-6"
                } z-10 hover:scale-100`}
                aria-description={
                    isExpanded ? "Collapse sidebar" : "Expand sidebar"
                }
            >
                {isExpanded ? <PanelRightOpen /> : <PanelLeftOpen />}
            </Button>
        </motion.div>
    );
};
