import { ContextProvider } from "@/context/teams/ContextProvider";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import Hydrate from "@/lib/query/HydrateClient";
import { createHelpers } from "@/utils/helpers";
import { dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { type Metadata } from "next";
import { MainCards } from "@/components/dashboard/main-dashboard-page/MainCards";
// import { LineChart } from "@/components/dashboard/main-dashboard-page/LineChart";
import { Notes } from "@/components/dashboard/main-dashboard-page/notes/Notes";
import { getUserByKindeId } from "@/server/routes/auth/get-user-by-kinde-id";

interface Props {}

export const metadata: Metadata = {
    title: "Dashboard | KanMaster",
    description: "Dashboard page for KanMaster.",
};

const page: FC<Props> = async () => {
    const kindeUser = await getKindeUser();

    if (!kindeUser) {
        return redirect("/");
    }

    const user = await getUserByKindeId(kindeUser.id);

    if (!user) {
        return redirect("/");
    }

    const helpers = await createHelpers();

    await helpers.getUserByKindeId.fetch(kindeUser.id);
    await helpers.getAllTeams.fetch(user.id);
    await helpers.getAllProjects.fetch(user.id);
    await helpers.getAllTasks.fetch(user.id);
    await helpers.getAllNotes.fetch(user.id);

    const teams = await helpers.getAllTeams.fetch(user.id);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <ContextProvider teams={teams}>
                <div className="wrapper flex flex-col gap-24">
                    <MainCards userId={user.id} />
                    {/* <LineChart /> */}
                    <Notes user={user} />
                </div>
            </ContextProvider>
        </Hydrate>
    );
};

export default page;
