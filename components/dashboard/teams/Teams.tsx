import { Team } from "@/types/models/team-model";
import { UserWithUsersToTeams } from "@/types/models/user-model";
import React from "react";
import { TeamThumbnail } from "./TeamThumbnail";

interface Props {
    user: UserWithUsersToTeams;
    teams: Team[];
}

export const Teams: React.FC<Props> = (props) => {
    return (
        <section className="grid grid-cols-4 gap-16">
            {props.teams.map((team) => (
                <TeamThumbnail key={team.id} team={team} />
            ))}
        </section>
    );
};
