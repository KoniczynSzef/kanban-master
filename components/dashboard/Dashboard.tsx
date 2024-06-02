"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./welcome-to-dashboard/WelcomeToDashboard";
import { Teams } from "./teams/Teams";
import { Searchbar } from "./searchbar/Searchbar";
import { SearchContext, TeamContext } from "@/context/context";

interface Props {
    kindeUser: KindeUser;
}

const Dashboard: FC<Props> = (props) => {
    const { teams } = React.useContext(TeamContext);
    const { typedValue } = React.useContext(SearchContext);
    const { data: user, isFetching } = trpc.getUserByKindeId.useQuery(
        props.kindeUser.id
    );

    if (!user || isFetching) {
        return <div>Loading...</div>;
    }

    if (!user.visitedDashboard) {
        return <WelcomeToDashboard user={user} isWelcomePage />;
    }

    if (teams.length === 0 && !typedValue) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create your first team and invite your friends or colleagues to
                join!
                <Button
                    className="self-center"
                    onClick={() => console.log("Create team")}
                >
                    Create team
                </Button>
            </div>
        );
    }

    return (
        <section>
            <Searchbar />

            {teams.length > 0 ? (
                <Teams user={user} />
            ) : (
                <div>No teams found</div>
            )}
        </section>
    );
};

export default Dashboard;
