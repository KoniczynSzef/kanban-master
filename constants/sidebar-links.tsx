import React from "react";

import { SidebarLink } from "@/types/dashboard/sidebar-link";
import { Home, Users } from "lucide-react";

export const SIDEBAR_LINKS: SidebarLink[] = [
    {
        text: "Dashboard",
        href: "/dashboard",
        icon: <Home />,
    },
    {
        text: "Teams",
        href: "/dashboard/teams",
        icon: <Users />,
    },
];
