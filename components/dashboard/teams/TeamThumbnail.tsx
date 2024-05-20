import * as Card from "@/components/ui/card";
import { Team } from "@/types/models/team-model";
import Link from "next/link";
import React from "react";

interface Props {
    team: Team;
}

function ThumbnailCorner(props: { color: string | null }) {
    return (
        <div
            className="absolute w-4 h-full rounded-2xl"
            style={{ backgroundColor: props.color ?? "" }}
        />
    );
}

export const TeamThumbnail: React.FC<Props> = (props) => {
    return (
        <Link href={`/dashboard/teams/${props.team.id}`}>
        <Card.Card className="relative">
            <ThumbnailCorner color={props.team.teamColor} />
            <Card.CardHeader>
                <Card.CardTitle>{props.team.name}</Card.CardTitle>
            </Card.CardHeader>
        </Card.Card>
        </Link>
    );
};
