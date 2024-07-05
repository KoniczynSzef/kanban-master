"use client";

import { Button } from "@/components/ui/button";
import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { PanelLeftOpen, X } from "lucide-react";
import React from "react";

interface Props {}

export const ToggleExpanded: React.FC<Props> = () => {
    const { setIsExpanded, isExpanded } = React.useContext(SidebarContext);
    return (
        <Button
            variant={"ghost"}
            onClick={() => setIsExpanded(!isExpanded)}
            size={"icon"}
            className="size-10 absolute top-4 right-4 z-10 hover:scale-100"
        >
            {isExpanded ? <X /> : <PanelLeftOpen />}
        </Button>
    );
};
