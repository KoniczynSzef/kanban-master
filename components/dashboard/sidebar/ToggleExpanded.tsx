"use client";

import { Button } from "@/components/ui/button";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { motion } from "framer-motion";
import { PanelLeftOpen, X } from "lucide-react";
import React from "react";

interface Props {
    isHovering: boolean;
    setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleExpanded: React.FC<Props> = (props) => {
    const { setIsExpanded, isExpanded } = React.useContext(SidebarContext);

    function handleExpandOrCollapse() {
        setIsExpanded(!isExpanded);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={props.isHovering ? { opacity: 1 } : { opacity: 0 }}
            onFocus={() => props.setIsHovering(true)}
            onBlur={() => props.setIsHovering(false)}
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
                {isExpanded ? <X /> : <PanelLeftOpen />}
            </Button>
        </motion.div>
    );
};
