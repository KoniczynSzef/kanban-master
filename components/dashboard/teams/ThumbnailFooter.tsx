import { Team } from "@/types/models/team-model";
import React from "react";

interface Props {
    team: Team;
}

export const ThumbnailFooter: React.FC<Props> = (props) => {
    const backgroundColor =
        props.team.teamStatus === "active"
            ? "bg-green-600"
            : props.team.teamStatus === "archived"
            ? "bg-secondary"
            : "bg-destructive";

    return (
        <>
            <div
                className={`${backgroundColor} text-white rounded-2xl px-2 py-1 capitalize flex items-center`}
            >
                {props.team.teamStatus}
            </div>
        </>
    );
};
