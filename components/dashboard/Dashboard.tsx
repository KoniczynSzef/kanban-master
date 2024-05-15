"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import Link from "next/link";
import { linkStyle } from "@/lib/link-style";

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

    const { user, teams } = data;

    if (teams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return (
        <div className="text-center">
            <h1>Dashboard</h1>
            <p>Welcome {user.name}</p>

            <div className="grid gap-8 my-16">
                {teams.map((team) => (
                    <div
                        key={team.id}
                        className="p-4 border rounded-3xl self-center mx-auto"
                    >
                        {team.name}
                    </div>
                ))}
            </div>

            <Link href="/dashboard/new-team" className={linkStyle}>
                <Button className="self-start" tabIndex={-1}>
                    Create a team
                </Button>
            </Link>
        </div>
    );
};

export default Dashboard;
