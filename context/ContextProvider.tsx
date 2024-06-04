"use client";

import React from "react";
import { TeamContext } from "./context";
import Dashboard from "@/components/dashboard/Dashboard";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Team } from "@/types/models/team-model";
import { MainCards } from "@/components/dashboard/main-dashboard-page/MainCards";
import { LineChart } from "@/components/dashboard/main-dashboard-page/LineChart";

interface Props {
    kindeUser: KindeUser;
    teams: Team[];
}

export const ContextProvider: React.FC<Props> = (props) => {
    const [teams, setTeams] = React.useState(props.teams);

    const initialTeams = props.teams;

    return (
        <TeamContext.Provider
            value={{
                initialTeams,
                teams,
                setTeams,
            }}
        >
            <MainCards
                teamsLength={initialTeams.length}
                projectsLength={10}
                activeTasksLength={4}
            />
            <LineChart />
            <Dashboard kindeUser={props.kindeUser} />
        </TeamContext.Provider>
    );
};
