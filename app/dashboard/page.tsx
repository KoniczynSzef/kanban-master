import Dashboard from "@/components/dashboard/Dashboard";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import Hydrate from "@/lib/query/HydrateClient";
import { createHelpers } from "@/utils/helpers";
import { dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const user = await getKindeUser();

    if (!user) {
        return redirect("/");
    }

    const helpers = await createHelpers();

    await helpers.getUserByKindeId.fetch(user.id);
    const userAndTeams = await helpers.getUserAndTeams.fetch(user.id);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <Dashboard kindeUser={user} initialData={userAndTeams} />
        </Hydrate>
    );
};

export default page;
