import React from "react";

export type SidebarContextType = {
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
    isExpanded: true,
    setIsExpanded: () => {},
});
