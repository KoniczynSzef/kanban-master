import React, { FC } from "react";
import LoggedUser from "./LoggedUser";
import AuthButtons from "./AuthButtons";

interface Props {
    isUserLoggedIn: boolean;
}

const AuthSection: FC<Props> = (props) => {
    return (
        <div className="hidden md:flex gap-8">
            {props.isUserLoggedIn ? <LoggedUser /> : <AuthButtons />}
        </div>
    );
};

export default AuthSection;
