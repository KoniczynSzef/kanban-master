import { Button } from "@/components/ui/button";
import Hydrate from "@/lib/HydrateClient";
import { createHelpers } from "@/utils/helpers";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { dehydrate } from "@tanstack/react-query";
import React, { FC } from "react";
import LoggedUserAvatar from "./LoggedUserAvatar";

interface Props {}

export async function prefetchQueries(kindeUser: KindeUser) {
    const helpers = await createHelpers();

    await helpers.getUserAndTeams.prefetch(kindeUser.id);

    return helpers;
}

const LoggedUser: FC<Props> = async () => {
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    if (!kindeUser) {
        return <div className="p-24">Not authenticated</div>;
    }

    const helpers = await prefetchQueries(kindeUser);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <LoggedUserAvatar kindeId={kindeUser.id} />
                <LogoutLink
                    postLogoutRedirectURL="/"
                    className="focus:ring-2 focus:ring-offset-4 focus:ring-destructive rounded-2xl focus:outline-0 transition duration-300"
                >
                    <Button variant={"destructive"} tabIndex={-1}>
                        Sign out
                    </Button>
                </LogoutLink>
            </div>
        </Hydrate>
    );
};

export default LoggedUser;
