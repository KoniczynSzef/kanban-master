"use client";

import React from "react";
import { TeamContext } from "./context";
import { Team } from "@/types/models/team-model";

interface Props {
    teams: Team[];
    children: React.ReactNode;
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
            {props.children}
        </TeamContext.Provider>
    );
};
