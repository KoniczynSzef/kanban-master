import React from "react";
import { TeamThumbnail } from "./TeamThumbnail";
import { Team } from "@/types/models/team-model";

import { type User } from "@/types/models/user-model";

interface Props {
    teams: Team[];
    user: User;
}

export const Teams: React.FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-2 gap-16 place-items-center my-16">
            {props.teams.map((team, index) => (
                <TeamThumbnail
                    key={crypto.randomUUID()}
                    team={team}
                    user={props.user}
                    index={index}
                />
            ))}
        </div>
    );
};
