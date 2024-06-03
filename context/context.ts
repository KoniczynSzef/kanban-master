"use client";

import { Team } from "@/types/models/team-model";
import React from "react";

type TeamContext = {
    initialTeams: Team[];
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
};

export const TeamContext = React.createContext<TeamContext>({
    initialTeams: [],
    teams: [],
    setTeams: () => [],
});
