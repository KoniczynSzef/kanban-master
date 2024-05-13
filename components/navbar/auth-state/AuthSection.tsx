import React, { FC } from "react";
import LoggedUser from "./LoggedUser";
import AuthButtons from "./AuthButtons";
import { cn } from "@/lib/utils";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    user: KindeUser | null;
}

const AuthSection: FC<Props> = (props) => {
    return (
        <div className={cn("mt-16 md:mt-0", props.className)}>
            {props.user ? <LoggedUser user={props.user} /> : <AuthButtons />}
        </div>
    );
};

export default AuthSection;
