import React, { FC } from "react";
import LoggedUser from "./LoggedUser";
import AuthButtons from "./AuthButtons";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isUserLoggedIn: boolean;
}

const AuthSection: FC<Props> = (props) => {
    return (
        <div className={cn("mt-16 md:mt-0", props.className)}>
            {props.isUserLoggedIn ? <LoggedUser /> : <AuthButtons />}
        </div>
    );
};

export default AuthSection;
