import * as Card from "@/components/ui/card";
import { User } from "@/types/models/user-model";
import Link from "next/link";
import React from "react";
import { ThumbnailCorner, ThumbnailBadge } from "./ThumbnailDecorations";
import { ThumbnailFooter } from "./ThumbnailFooter";
import { trpc } from "@/server/trpc";
import { Skeleton } from "@/components/ui/skeleton";

import { Team } from "@/types/models/team-model";

interface Props {
    team: Team;
    user: User;
    index: number;
}

export const TeamThumbnail: React.FC<Props> = (props) => {
    const { team } = props;
    const { data: membersLength } = trpc.getMembersLength.useQuery(team.id);

    if (!team || !membersLength) return <Skeleton className="w-[36rem] h-48" />;

    return (
        <Link
            href={`/dashboard/teams/${team.id}`}
            className="focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:outline-none rounded-2xl transition duration-300 hover:scale-105"
        >
            <Card.Card className="relative w-[36rem] h-56">
                <ThumbnailCorner color={team.teamColor} />
                <ThumbnailBadge user={props.user} team={team} />

                <div className="padding__wrapper m-8">
                    <Card.CardHeader>
                        <Card.CardTitle>{team.name}</Card.CardTitle>
                    </Card.CardHeader>

                    <Card.CardContent>
                        <Card.CardDescription>
                            {team.description}
                        </Card.CardDescription>
                    </Card.CardContent>

                    <Card.CardFooter className="flex items-center justify-between">
                        <ThumbnailFooter
                            team={team}
                            membersLength={membersLength}
                        />
                    </Card.CardFooter>
                </div>
            </Card.Card>
        </Link>
    );
};
