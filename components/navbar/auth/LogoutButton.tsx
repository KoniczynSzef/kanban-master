import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";
import React from "react";

interface Props {
    isSidebarExpanded?: boolean;
}

export const LogoutButton: React.FC<Props> = ({ isSidebarExpanded = true }) => {
    isSidebarExpanded;
    return (
        <LogoutLink
            postLogoutRedirectURL="/"
            className={cn("hovered__link", "focus:ring-destructive")}
        >
            <Button
                variant={"destructive"}
                tabIndex={-1}
                size={isSidebarExpanded ? "default" : "icon"}
            >
                {isSidebarExpanded ? "Sign out" : <LogOut />}
            </Button>
        </LogoutLink>
    );
};
