import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

interface Props {}

export const LogoutButton: React.FC<Props> = () => {
    return (
        <LogoutLink
            postLogoutRedirectURL="/"
            className={cn("hovered__link", "focus:ring-destructive")}
        >
            <Button variant={"destructive"} tabIndex={-1}>
                Sign out
            </Button>
        </LogoutLink>
    );
};
