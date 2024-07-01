import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React, { FC } from "react";
import { ToggleMode } from "../mode/ToggleMode";

interface Props {}

const AuthButtons: FC<Props> = () => {
    return (
        <>
            <RegisterLink className={"hovered__link"}>
                <Button
                    aria-description="Button that users can see and click on to register. If you want to log in, go to the previous link"
                    tabIndex={-1}
                >
                    Register
                </Button>
            </RegisterLink>

            <LoginLink className={cn("hovered__link", "focus:ring-secondary")}>
                <Button
                    variant={"outline"}
                    aria-description="Button that users can see and click on to log in. If you want to log in, go to the previous link"
                    tabIndex={-1}
                >
                    Log in
                </Button>
            </LoginLink>

            <ToggleMode />
        </>
    );
};

export default AuthButtons;
