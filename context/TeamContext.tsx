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
    return (
        <TeamContext.Provider value={props.teams}>
            <Dashboard {...props} />
        </TeamContext.Provider>
    );
};
