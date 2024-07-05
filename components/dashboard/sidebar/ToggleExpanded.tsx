"use client";

import { Button } from "@/components/ui/button";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { useExpandSidebar } from "@/hooks/use-expand-sidebar";
import { PanelLeftOpen, X } from "lucide-react";
import React from "react";

interface Props {}

export const ToggleExpanded: React.FC<Props> = () => {
    const { setIsExpanded, isExpanded } = React.useContext(SidebarContext);
    const expandSidebar = useExpandSidebar(isExpanded, setIsExpanded);

    function handleExpand() {
        expandSidebar();
    }

    return (
        <Button
            variant={"ghost"}
            onClick={handleExpand}
            size={"icon"}
            className="size-8 absolute top-2 right-2 z-10 hover:scale-100"
        >
            {isExpanded ? <X /> : <PanelLeftOpen />}
        </Button>
    );
};
