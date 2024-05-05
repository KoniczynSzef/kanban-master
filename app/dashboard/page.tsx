import Info from "@/components/dashboard/Info";
import Hydrate from "@/lib/HydrateClient";
import { createHelpers } from "@/utils/helpers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const isAuth = await isAuthenticated();
    const user = await getUser();

    if (!isAuth || !user) {
        return redirect("/");
    }

    const helpers = await createHelpers();

    await helpers.getUserByKindeId.prefetch(user.id);
    await helpers.getUserAndTeams.prefetch(user.id);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <Info kindeUser={user} />
        </Hydrate>
    );
};

export default page;
