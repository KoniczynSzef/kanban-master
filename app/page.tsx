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
import Account from "@/components/Account";
import Users from "@/components/Users";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface Props {}

async function createHelpers(kindeUser: KindeUser) {
    const helpers = createSSRHelper();
    await helpers.fetchUsers.prefetch();
    await helpers.getUserByKindeId.prefetch(kindeUser.id);
    return helpers;
}

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
                <Account kindeUser={kindeUser} />
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
