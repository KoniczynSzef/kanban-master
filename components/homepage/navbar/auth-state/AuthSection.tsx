import React, { FC } from "react";
import LoggedUser from "./LoggedUser";
import AuthButtons from "./AuthButtons";

interface Props {
    isUserLoggedIn: boolean;
}

const AuthSection: FC<Props> = (props) => {
    return (
        <div className="mt-16 md:mt-0">
            {props.isUserLoggedIn ? <LoggedUser /> : <AuthButtons />}
        </div>
    );
};

export default AuthSection;
