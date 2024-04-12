"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { serverClient } from "./_trpc/server";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();
    const kindeUser = await getUser();

    if (!isLoggedIn || !kindeUser) {
        return (
            <div>
                Not authenticated
                <RegisterLink>
                    <Button>Register</Button>
                </RegisterLink>
                <LoginLink>
                    <Button variant={"outline"}>Login</Button>
                </LoginLink>
            </div>
        );
    }

    // const user = await getUserByKindeId(kindeUser.id);

    // const isUserValidated = await checkUserValidation();

    // if (!isUserValidated) {
    //     return redirect("/create-account");
    // }

    // const user = await serverClient.getUserByKindeId(kindeUser.id);

    // console.log(user);

    return (
        <div className="p-24">
            <LogoutLink postLogoutRedirectURL="/">
                <Button variant={"destructive"} className="my-16">
                    Sign out
                </Button>
            </LogoutLink>
        </div>
    );
};

export default page;
