import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

interface Props {}

export const LoginButton: React.FC<Props> = () => {
    return (
        <LoginLink className={cn("hovered__link", "focus:ring-secondary")}>
            <Button
                variant={"outline"}
                aria-description="Button that users can see and click on to log in. If you want to log in, go to the previous link"
                tabIndex={-1}
            >
                Log in
            </Button>
        </LoginLink>
    );
};
