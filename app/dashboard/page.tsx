import { TeamContextProvider } from "@/context/TeamContextProvider";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import Hydrate from "@/lib/query/HydrateClient";
import { Team } from "@/types/models/team-model";
import { createHelpers } from "@/utils/helpers";
import { dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const user = await getKindeUser();
    const teams: Team[] = [];

    if (!user) {
        return redirect("/");
    }

    const helpers = await createHelpers();

    await helpers.getUserByKindeId.fetch(user.id);
    const data = await helpers.getUserAndTeams.fetch(user.id);

    const usersToTeams = data?.usersToTeams;

    if (usersToTeams && usersToTeams.length > 0) {
        for (const team of usersToTeams) {
            const t = await helpers.getTeam.fetch(team.teamId);

            if (t) {
                teams.push(t);
            }
        }
    }

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <TeamContextProvider
                initialData={data}
                kindeUser={user}
                teams={teams}
            />
        </Hydrate>
    );
};

export default page;
