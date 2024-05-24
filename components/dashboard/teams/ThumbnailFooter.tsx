import { Team } from "@/types/models/team-model";
import { Link2, Loader, User } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
    team: Team;
    membersLength: number | undefined;
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

            <div className="flex items-center gap-3">
                <User className="text-muted-foreground" />
                <span>
                    {props.membersLength ?? <Loader className="animate-spin" />}
                </span>
            </div>

            {props.team.teamChatLink ? (
                <Link
                    href={props.team.teamChatLink}
                    className="text-muted-foreground hover:text-black transition duration-300 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none p-1"
                    aria-description="Link to team chat"
                >
                    {props.team.teamChatLink}
                </Link>
            ) : (
                <span className="text-destructive flex items-center gap-3">
                    No chat link <Link2 />
                </span>
            )}
        </>
    );
};
