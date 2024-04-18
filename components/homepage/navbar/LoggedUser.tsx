import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const LoggedUser: FC<Props> = () => {
    return (
        <>
            <Link
                href={"/dashboard"}
                className="px-4 py-2 rounded-2xl hover:bg-purple-50 transition duration-300 focus:ring-2 focus:ring-primary focus:outline-0"
            >
                Dashboard
            </Link>
            <LogoutLink
                postLogoutRedirectURL="/"
                className="focus:ring-2 focus:ring-offset-4 focus:ring-destructive rounded-2xl focus:outline-0 transition duration-300"
            >
                <Button variant={"destructive"} tabIndex={-1}>
                    Sign out
                </Button>
            </LogoutLink>
        </>
    );
};

export default LoggedUser;
