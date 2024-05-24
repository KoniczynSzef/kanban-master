"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import Link from "next/link";
import { linkStyle } from "@/lib/link-style";
import { Teams } from "./teams/Teams";
import { UserWithUsersToTeams } from "@/types/models/user-model";

interface Props {
    kindeUser: KindeUser;
    initialData: {
        user: UserWithUsersToTeams;
    } | null;
}

const Dashboard: FC<Props> = (props) => {
    const { data, isFetching } = trpc.getUserAndTeams.useQuery(
        props.kindeUser.id
    );

    if (!data || isFetching) {
        return <div>Loading...</div>;
    }

    if (!data.user.visitedDashboard) {
        return <WelcomeToDashboard user={data.user} isWelcomePage />;
    }

    if (data.user.usersToTeams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return (
        <section>
            <h2 className="text-3xl font-bold text-left">My Teams: </h2>

            <Teams user={data.user} />

            <Link href="/dashboard/new-team" className={linkStyle}>
                <Button className="self-start" tabIndex={-1}>
                    Create a team
                </Button>
            </Link>
        </section>
    );
};

export default Dashboard;
