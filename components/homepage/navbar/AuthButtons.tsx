import { Button } from "@/components/ui/button";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React, { FC } from "react";

interface Props {}

const AuthButtons: FC<Props> = () => {
    return (
        <>
            <RegisterLink>
                <Button>Register</Button>
            </RegisterLink>

            <LoginLink>
                <Button variant={"outline"}>Log in</Button>
            </LoginLink>
        </>
    );
};

export default AuthButtons;
