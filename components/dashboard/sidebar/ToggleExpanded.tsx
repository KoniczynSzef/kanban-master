"use client";

import { Button } from "@/components/ui/button";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { PanelLeftOpen, X } from "lucide-react";
import React from "react";

interface Props {}

export const ToggleExpanded: React.FC<Props> = () => {
    const { setIsExpanded, isExpanded } = React.useContext(SidebarContext);

    function handleExpandOrCollapse() {
        setIsExpanded(!isExpanded);
    }

    return (
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
    );
};