import React, { FC } from "react";
import AuthButtons from "./AuthButtons";
import { cn } from "@/lib/utils";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { ToggleMode } from "../mode/ToggleMode";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    user: KindeUser | null;
}

const AuthSection: FC<Props> = (props) => {
    return (
        <div className={cn("mt-16 md:mt-0", props.className)}>
            {props.user ? (
                <LogoutLink
                    postLogoutRedirectURL="/"
                    className={cn("hovered__link", "focus:ring-destructive")}
                >
                    <Button variant={"destructive"} tabIndex={-1}>
                        Sign out
                    </Button>
                </LogoutLink>
            ) : (
                <AuthButtons />
            )}
            <ToggleMode />
        </div>
    );
};

export default AuthSection;
