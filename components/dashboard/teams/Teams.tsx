import { UserWithUsersToTeams } from "@/types/models/user-model";
import React from "react";
import { TeamThumbnail } from "./TeamThumbnail";

interface Props {
    user: UserWithUsersToTeams;
}

export const Teams: React.FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-2 gap-16 place-items-center my-16">
            {props.user.usersToTeams.map((usersToTeams, index) => (
                <TeamThumbnail
                    key={crypto.randomUUID()}
                    usersToTeams={usersToTeams}
                    user={props.user}
                    index={index}
                />
            ))}
        </div>
    );
};
