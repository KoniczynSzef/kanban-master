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
        <section>
            <h2 className="text-3xl font-bold text-left">My Teams: </h2>

            <div className="grid grid-cols-2 gap-16 place-items-center my-16">
                {props.user.usersToTeams.map((usersToTeams) => (
                    <TeamThumbnail
                        key={crypto.randomUUID()}
                        usersToTeams={usersToTeams}
                        user={props.user}
                    />
                ))}
            </div>
        </section>
    );
};
