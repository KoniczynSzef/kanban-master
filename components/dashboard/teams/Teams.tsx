import React from "react";
import { TeamThumbnail } from "./TeamThumbnail";

import { type User } from "@/types/models/user-model";
import { TeamContext } from "@/context/team-context";

import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
    user: User;
}

export const Teams: React.FC<Props> = (props) => {
    const { teams } = React.useContext(TeamContext);

    const [parentAnimationRef] = useAutoAnimate<HTMLDivElement>();

    return (
        <div
            className="grid grid-cols-2 gap-16 place-items-center my-16"
            ref={parentAnimationRef}
        >
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
