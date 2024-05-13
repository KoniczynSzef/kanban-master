"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";

interface Props {
    kindeUser: KindeUser;
}

const Dashboard: FC<Props> = (props) => {
    const { data } = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    if (!data) {
        return <div>No data</div>;
    }

    if (!data.user.visitedDashboard) {
        return <WelcomeToDashboard user={data.user} />;
    }

    if (data.teams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Dashboard;
