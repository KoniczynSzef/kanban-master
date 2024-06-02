"use client";

import { Team } from "@/types/models/team-model";
import React from "react";

type TeamContext = {
    initialTeams: Team[];
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
};

type SearchContext = {
    typedValue: string;
    setTypedValue: React.Dispatch<React.SetStateAction<string>>;
};

export const TeamContext = React.createContext<TeamContext>({
    initialTeams: [],
    teams: [],
    setTeams: () => [],
});

export const SearchContext = React.createContext<SearchContext>({
    typedValue: "",
    setTypedValue: () => "",
});
