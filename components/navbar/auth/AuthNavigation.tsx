import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { ToggleMode } from "../mode/ToggleMode";
import { RegisterButton } from "./RegisterButton";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    user: KindeUser | null;
}

const AuthNavigation: FC<Props> = (props) => {
    return (
        <div className={cn("mt-16 md:mt-0", props.className)}>
            {props.user ? (
                <LogoutButton />
            ) : (
                <>
                    <RegisterButton />
                    <LoginButton />
                </>
            )}

            <ToggleMode />
        </div>
    );
};

export default AuthNavigation;
