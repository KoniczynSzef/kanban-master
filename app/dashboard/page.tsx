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
import { Header } from "@/components/dashboard/helpers/Header";

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
    await helpers.getTeamsByUserId.fetch(user.id);
    await helpers.getProjectsByUserId.fetch(user.id);
    await helpers.getTasksByUserId.fetch(user.id);
    await helpers.getAllNotes.fetch(user.id);

    const teams = await helpers.getTeamsByUserId.fetch(user.id);

    return (
        <Hydrate state={dehydrate(helpers.queryClient)}>
            <ContextProvider teams={teams}>
                <section className="wrapper flex flex-col gap-24">
                    <Header
                        pageTitle="Dashboard"
                        description="Monitor and analyze key metrics to optimize your business performance"
                    />
                    <MainCards userId={user.id} />
                    {/* <LineChart /> */}
                    <Notes user={user} />
                </section>
            </ContextProvider>
        </Hydrate>
    );
};

export default page;
