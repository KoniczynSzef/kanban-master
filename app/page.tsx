import Hydrate from "@/lib/HydrateClient";
import { dehydrate } from "@tanstack/react-query";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Account from "@/components/Account";
import Users from "@/components/Users";
import { createHelpers } from "@/utils/helpers";
import Project from "@/components/Project";

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

    const helpers = await createHelpers(kindeUser);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <div className="p-24">
                <div className="flex">
                    <Account kindeUser={kindeUser} />
                    <Project />
                </div>
                <LogoutLink postLogoutRedirectURL="/">
                    <Button variant={"destructive"} className="my-16">
                        Sign out
                    </Button>
                </LogoutLink>
            </div>

            <Users />
        </Hydrate>
    );
};

export default page;
