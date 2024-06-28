import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React, { FC } from "react";
import LoggedUserAvatar from "./LoggedUserAvatar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { ToggleMode } from "../mode/ToggleMode";

interface Props {
    user: KindeUser;
}

const LoggedUser: FC<Props> = (props) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <LoggedUserAvatar kindeId={props.user.id} />
            <LogoutLink
                postLogoutRedirectURL="/"
                className="focus:ring-2 focus:ring-offset-4 focus:ring-destructive rounded-2xl focus:outline-0 transition duration-300"
            >
                <Button variant={"destructive"} tabIndex={-1}>
                    Sign out
                </Button>
            </LogoutLink>

            <ToggleMode />
        </div>
    );
};

export default LoggedUser;
