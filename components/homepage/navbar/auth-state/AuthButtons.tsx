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
            <RegisterLink className="focus:ring-2 focus:ring-offset-4 focus:ring-primary rounded-2xl focus:outline-0 transition duration-300">
                <Button
                    aria-description="Button that users can see and click on to register. If you want to log in, go to the previous link"
                    tabIndex={-1}
                >
                    Register
                </Button>
            </RegisterLink>

            <LoginLink className="focus:ring-2 focus:ring-offset-4 focus:ring-secondary rounded-2xl focus:outline-0 transition duration-300">
                <Button
                    variant={"outline"}
                    aria-description="Button that users can see and click on to log in. If you want to log in, go to the previous link"
                    tabIndex={-1}
                >
                    Log in
                </Button>
            </LoginLink>
        </>
    );
};

export default AuthButtons;
