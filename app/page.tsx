import Hydrate from "@/lib/HydrateClient";
import { createSSRHelper } from "@/trpc/router";
import { dehydrate } from "@tanstack/react-query";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import queryClient from "@/lib/query-client";

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

    const helpers = createSSRHelper();
    await helpers.fetchUsers.prefetch();

    return (
        <Hydrate state={dehydrate(queryClient)}>
            <div className="p-24">
                <LogoutLink postLogoutRedirectURL="/">
                    <Button variant={"destructive"} className="my-16">
                        Sign out
                    </Button>
                </LogoutLink>
            </div>
        </Hydrate>
    );
};

export default page;
