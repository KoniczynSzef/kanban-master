import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

interface Props {}

export const RegisterButton: React.FC<Props> = () => {
    return (
        <RegisterLink className={"hovered__link"}>
            <Button
                aria-description="Button that users can see and click on to register. If you want to log in, go to the previous link"
                tabIndex={-1}
            >
                Register
            </Button>
        </RegisterLink>
    );
};
