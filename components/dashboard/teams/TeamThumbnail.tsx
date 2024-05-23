import * as Card from "@/components/ui/card";
import { Team } from "@/types/models/team-model";
import { User } from "@/types/models/user-model";
import Link from "next/link";
import React from "react";
import { ThumbnailCorner, ThumbnailBadge } from "./ThumbnailDecorations";
import { ThumbnailFooter } from "./ThumbnailFooter";
import { trpc } from "@/server/trpc";

interface Props {
    team: Team;
    user: User;
}

export const TeamThumbnail: React.FC<Props> = (props) => {
    const { data: membersLength } = trpc.getMembersLength.useQuery(
        props.team.id
    );

    return (
        <Link
            href={`/dashboard/teams/${props.team.id}`}
            className="focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:outline-none rounded-2xl transition duration-300 group"
        >
            <div
                className={`p-2 bg-white rounded-2xl group-hover:bg-secondary transition duration-500 ${
                    props.team.teamStatus === "inactive" ? "opacity-50" : ""
                }`}
            >
                <Card.Card className="relative w-[36rem]">
                    <ThumbnailCorner color={props.team.teamColor} />
                    <ThumbnailBadge user={props.user} team={props.team} />
                    <div className="padding__wrapper my-4">
                        <Card.CardHeader>
                            <Card.CardTitle>{props.team.name}</Card.CardTitle>
                        </Card.CardHeader>

                        <Card.CardContent>
                            <Card.CardDescription>
                                {props.team.description}
                            </Card.CardDescription>
                        </Card.CardContent>

                        <Card.CardFooter className="flex items-center justify-evenly">
                            <ThumbnailFooter
                                team={props.team}
                                membersLength={membersLength}
                            />
                        </Card.CardFooter>
                    </div>
                </Card.Card>
            </div>
        </Link>
    );
};
