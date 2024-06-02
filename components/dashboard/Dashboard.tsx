"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import { Teams } from "./teams/Teams";
import { Searchbar } from "./searchbar/Searchbar";
import { TeamContext } from "@/context/context";

interface Props {
    kindeUser: KindeUser;
}

const Dashboard: FC<Props> = (props) => {
    const { teams } = React.useContext(TeamContext);
    const { data: user, isFetching } = trpc.getUserByKindeId.useQuery(
        props.kindeUser.id
    );

    if (!user || isFetching) {
        return <div>Loading...</div>;
    }

    if (!user.visitedDashboard) {
        return <WelcomeToDashboard user={user} isWelcomePage />;
    }

    // ! Add a check for if something is typed in the search bar, because currently after typing "+" it will show a div below

    if (teams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return (
        <section>
            <Searchbar />

            <Teams user={user} />
        </section>
    );
};

export default Dashboard;
