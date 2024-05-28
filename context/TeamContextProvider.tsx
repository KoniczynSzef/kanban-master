"use client";

import React from "react";
import { TeamContext } from "./team-context";
import Dashboard from "@/components/dashboard/Dashboard";
import { UserWithUsersToTeams } from "@/types/models/user-model";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Team } from "@/types/models/team-model";

interface Props {
    initialData: UserWithUsersToTeams | null;
    kindeUser: KindeUser;
    teams: Team[];
}

export const TeamContextProvider: React.FC<Props> = (props) => {
    const [teams, setTeams] = React.useState(props.teams);
    const initialTeams = props.teams;

    return (
        <TeamContext.Provider value={teams}>
            <Dashboard
                {...props}
                setTeams={setTeams}
                teams={teams}
                initialTeams={initialTeams}
            />
        </TeamContext.Provider>
    );
};
