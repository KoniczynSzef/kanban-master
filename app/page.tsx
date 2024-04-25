import Hydrate from "@/lib/HydrateClient";
import { dehydrate } from "@tanstack/react-query";

import React, { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Account from "@/components/Account";
import { createHelpers } from "@/utils/helpers";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();
    const kindeUser = await getUser();

    if (!isLoggedIn || !kindeUser) {
        return <div className="p-24">Not authenticated</div>;
    }

    const helpers = await createHelpers();
    await helpers.fetchUsers.prefetch();
    await helpers.getUserAndTeams.prefetch(kindeUser.id);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <div>
                <div className="flex">
                    <Account kindeUser={kindeUser} />
                </div>
            </div>
        </Hydrate>
    );
};

export default page;
