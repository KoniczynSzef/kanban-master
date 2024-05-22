import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import * as Card from "@/components/ui/card";
import { Team } from "@/types/models/team-model";
import { User } from "@/types/models/user-model";
import { Activity, Archive, User as UserIcon, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThumbnailCorner, ThumbnailBadge } from "./ThumbnailDecorations";

interface Props {
    team: Team;
    user: User;
}

export const TeamThumbnail: React.FC<Props> = (props) => {
    return (
        <Link
            href={`/dashboard/teams/${props.team.id}`}
            className="focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:outline-none rounded-2xl transition duration-300 group"
        >
            <Card.Card className="relative group-hover:bg-secondary transition duration-300 w-[36rem]">
                <ThumbnailCorner color={props.team.teamColor} />
                <ThumbnailBadge user={props.user} team={props.team} />
                <div className="wrapper relative my-4">
                    <Card.CardHeader>
                        <Card.CardTitle>{props.team.name}</Card.CardTitle>
                    </Card.CardHeader>

                    <Card.CardContent>
                        <Card.CardDescription>
                            {props.team.description}
                        </Card.CardDescription>
                    </Card.CardContent>

                    <Card.CardFooter className="flex items-center justify-evenly">
                        <div>
                            <Avatar>
                                <AvatarFallback className="border">
                                    <UserIcon className="text-muted-foreground" />
                                </AvatarFallback>
                            </Avatar>
                            {/* 
                    /*
                        TODO: Add team members length
                    */}
                        </div>
                        <div>
                            <Avatar>
                                <AvatarFallback className="border">
                                    {props.team.teamStatus === "active" ? (
                                        <Activity className="text-green-500" />
                                    ) : props.team.teamStatus === "archived" ? (
                                        <Archive className="text-muted-foreground" />
                                    ) : (
                                        <X className="text-destructive" />
                                    )}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </Card.CardFooter>
                </div>
            </Card.Card>
        </Link>
    );
};
