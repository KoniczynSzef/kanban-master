import * as Card from "@/components/ui/card";
import { User } from "@/types/models/user-model";
import Link from "next/link";
import React from "react";
import { ThumbnailCorner, ThumbnailBadge } from "./ThumbnailDecorations";
import { ThumbnailFooter } from "./ThumbnailFooter";
import { trpc } from "@/server/trpc";
import { UsersToTeams } from "@/types/models/users-to-teams-model";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    usersToTeams: UsersToTeams;
    user: User;
}

export const TeamThumbnail: React.FC<Props> = (props) => {
    const { data: team } = trpc.getTeam.useQuery(props.usersToTeams.teamId);
    const { data: membersLength } = trpc.getMembersLength.useQuery(
        props.usersToTeams.teamId
    );

    if (!team || !membersLength) return <Skeleton className="w-[36rem] h-48" />;

    return (
        <Link
            href={`/dashboard/teams/${team.id}`}
            className="focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:outline-none rounded-2xl transition duration-300 group"
        >
            <div
                className={`p-2 bg-white rounded-2xl group-hover:bg-secondary transition duration-500 ${
                    team.teamStatus === "inactive" ? "opacity-50" : ""
                }`}
            >
                <Card.Card className="relative w-[36rem]">
                    <ThumbnailCorner color={team.teamColor} />
                    <ThumbnailBadge user={props.user} team={team} />
                    <div className="padding__wrapper my-4">
                        <Card.CardHeader>
                            <Card.CardTitle>{team.name}</Card.CardTitle>
                        </Card.CardHeader>

                        <Card.CardContent>
                            <Card.CardDescription>
                                {team.description}
                            </Card.CardDescription>
                        </Card.CardContent>

                        <Card.CardFooter className="flex items-center justify-evenly">
                            <ThumbnailFooter
                                team={team}
                                membersLength={membersLength}
                            />
                        </Card.CardFooter>
                    </div>
                </Card.Card>
            </div>
        </Link>
    );
};
