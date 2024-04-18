import Hydrate from "@/lib/HydrateClient";
import { dehydrate } from "@tanstack/react-query";

import React, { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
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
        return <div className="p-24">Not authenticated</div>;
    }

    const helpers = await createHelpers(kindeUser);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <div className="p-24">
                <div className="flex">
                    <Account kindeUser={kindeUser} />
                    <Project />
                </div>
            </div>

            <Users />
        </Hydrate>
    );
};

export default page;
