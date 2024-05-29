"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import Link from "next/link";
import { linkStyle } from "@/lib/link-style";
import { Teams } from "./teams/Teams";
import { Searchbar } from "./searchbar/Searchbar";
import { TeamContext } from "@/context/team-context";

interface Props {
    kindeUser: KindeUser;
}

const Dashboard: FC<Props> = (props) => {
    const { initialTeams, teams, setTeams } = React.useContext(TeamContext);
    const { data: user, isFetching } = trpc.getUserByKindeId.useQuery(
        props.kindeUser.id
    );

    if (!user || isFetching) {
        return <div>Loading...</div>;
    }

    if (!user.visitedDashboard) {
        return <WelcomeToDashboard user={user} isWelcomePage />;
    }

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
            <Searchbar teams={props.teams} setTeams={props.setTeams} />

            <Teams user={user} teams={props.teams} />

            <Link href="/dashboard/new-team" className={linkStyle}>
                <Button className="self-start" tabIndex={-1}>
                    Create a team
                </Button>
            </Link>
        </section>
    );
};

export default Dashboard;
