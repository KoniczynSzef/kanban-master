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
        <div
            className="absolute w-4 h-full rounded-2xl rounded-r-none"
            style={{ backgroundColor: props.color ?? "" }}
        />
    );
}

export function ThumbnailBadge(props: ThumbnailBadgeProps) {
    return (
        <div className="absolute right-4 top-4">
            {props.team.ownerId === props.user.id ? "Owner" : "Not owner"}
        </div>
    );
}
