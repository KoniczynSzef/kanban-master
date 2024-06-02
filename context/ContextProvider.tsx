"use client";

import React from "react";
import { SearchContext, TeamContext } from "./context";
import Dashboard from "@/components/dashboard/Dashboard";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Team } from "@/types/models/team-model";

interface Props {
    kindeUser: KindeUser;
    teams: Team[];
}

export const TeamContextProvider: React.FC<Props> = (props) => {
    const [teams, setTeams] = React.useState(props.teams);

    const [typedValue, setTypedValue] = React.useState("");

    const initialTeams = props.teams;

    return (
        <TeamContext.Provider
            value={{
                initialTeams,
                teams,
                setTeams,
            }}
        >
            <SearchContext.Provider
                value={{
                    typedValue,
                    setTypedValue,
                }}
            >
                <Dashboard kindeUser={props.kindeUser} />
            </SearchContext.Provider>
        </TeamContext.Provider>
    );
};
