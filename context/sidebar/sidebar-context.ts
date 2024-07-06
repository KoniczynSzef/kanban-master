import React from "react";

export type SidebarContextType = {
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
    isHovered: boolean;
    setIsHovered: (isHovered: boolean) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
    isExpanded: true,
    setIsExpanded: () => {},
    isHovered: false,
    setIsHovered: () => {},
});
