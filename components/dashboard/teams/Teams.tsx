import React from "react";
import { TeamThumbnail } from "./TeamThumbnail";

import { type User } from "@/types/models/user-model";
import { TeamContext } from "@/context/team-context";

interface Props {
    user: User;
}

export const Teams: React.FC<Props> = (props) => {
    const { teams } = React.useContext(TeamContext);
    return (
        <div className="grid grid-cols-2 gap-16 place-items-center my-16">
            {teams.map((team, index) => (
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
