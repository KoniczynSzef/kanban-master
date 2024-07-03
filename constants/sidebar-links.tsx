import React from "react";

import { SidebarLink } from "@/types/dashboard/sidebar-link";
import { Home, Settings } from "lucide-react";

export const SIDEBAR_LINKS: SidebarLink[] = [
    {
        text: "Dashboard",
        href: "/dashboard",
        icon: <Home />,
    },
    {
        text: "Settings",
        href: "/dashboard/settings",
        icon: <Settings />,
    },
];
