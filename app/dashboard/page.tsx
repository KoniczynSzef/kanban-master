import { ContextProvider } from "@/context/ContextProvider";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import Hydrate from "@/lib/query/HydrateClient";
import { createHelpers } from "@/utils/helpers";
import { dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { type Metadata } from "next";
import { MainCards } from "@/components/dashboard/main-dashboard-page/MainCards";
import { LineChart } from "@/components/dashboard/main-dashboard-page/LineChart";
import Dashboard from "@/components/dashboard/Dashboard";

interface Props {}

export const metadata: Metadata = {
    title: "Dashboard | KanMaster",
    description: "Dashboard page for KanMaster.",
};

const page: FC<Props> = async () => {
    const user = await getKindeUser();

    if (!user) {
        return redirect("/");
    }

    const helpers = await createHelpers();

    await helpers.getUserByKindeId.fetch(user.id);
    await helpers.getAllTeams.fetch(user.id);
    await helpers.getAllProjects.fetch(user.id);
    await helpers.getAllTasks.fetch(user.id);

    const teams = (await helpers.getAllTeams.fetch(user.id)) ?? [];
    const projects = (await helpers.getAllProjects.fetch(user.id)) ?? [];
    const tasks =
        (await helpers.getTasksByStatus.fetch({
            userId: user.id,
            status: "active",
        })) ?? [];

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <ContextProvider kindeUser={user} teams={teams}>
                <MainCards
                    teamsLength={teams.length}
                    projectsLength={projects.length}
                    activeTasksLength={tasks.length}
                />
                <LineChart />
                <Dashboard kindeUser={user} />
            </ContextProvider>
        </Hydrate>
    );
};

export default page;
