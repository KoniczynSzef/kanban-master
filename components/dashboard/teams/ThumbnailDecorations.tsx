import { Team } from "@/types/models/team-model";
import { User } from "@/types/models/user-model";
import React from "react";

interface ThumbnailCornerProps {
    color: string | null;
}

interface ThumbnailBadgeProps {
    user: User;
    team: Team;
}

export function ThumbnailCorner(props: ThumbnailCornerProps) {
    return (
        <>
            <div
                className="absolute h-3 w-full rounded-2xl rounded-bl-none rounded-br-none"
                style={{ backgroundColor: props.color ?? "" }}
            />
        </>
    );
}

export function ThumbnailBadge(props: ThumbnailBadgeProps) {
    return (
        <div className="absolute right-6 top-8 bg-secondary-foreground px-4 py-2 text-white rounded-2xl">
            {props.team.ownerId === props.user.id ? "Owner" : "Not owner"}
        </div>
    );
}
