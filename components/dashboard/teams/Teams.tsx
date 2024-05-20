import { UserWithUsersToTeams } from "@/types/models/user-model";
import React from "react";

interface Props {
    user: UserWithUsersToTeams;
}

export const Teams: React.FC<Props> = (props) => {
    console.log(props.user);

    return (
        <div>
            <p></p>
        </div>
    );
};
