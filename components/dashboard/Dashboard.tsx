"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import Link from "next/link";
import { linkStyle } from "@/lib/link-style";
import { Teams } from "./teams/Teams";
import { Team } from "@/types/models/team-model";
import { UserWithUsersToTeams } from "@/types/models/user-model";

interface Props {
    kindeUser: KindeUser;
    initialData: {
        user: UserWithUsersToTeams;
        teams: Team[];
    } | null;
}

const Dashboard: FC<Props> = (props) => {
    const { data = props.initialData, isFetching } =
        trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    if (!data || isFetching) {
        return <div>Loading...</div>;
    }

    if (!data.user.visitedDashboard) {
        return <WelcomeToDashboard user={data.user} isWelcomePage />;
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
            <Teams user={user} teams={teams} />

            <Link href="/dashboard/new-team" className={linkStyle}>
                <Button className="self-start" tabIndex={-1}>
                    Create a team
                </Button>
            </Link>
        </div>
    );
};

export default Dashboard;
