"use client";

import * as Card from "@/components/ui/card";
import { trpc } from "@/server/trpc";
import { CheckCircle2, FolderOpen, Loader, Users2 } from "lucide-react";
import React from "react";

interface Props {
    userId: string;
}

interface MainCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    isLoading?: boolean;
}

function MainCard(props: MainCardProps) {
    return (
        <Card.Card className="w-full md:w-[15rem]">
            <Card.CardHeader>
                <Card.CardTitle>{props.title}</Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <span>{props.icon}</span>

                    <span className="font-semibold flex gap-2">
                        {props.isLoading ? (
                            <>
                                <Loader className="animate-spin" />
                                Loading...
                            </>
                        ) : (
                            props.value
                        )}
                    </span>
                </div>
            </Card.CardContent>
        </Card.Card>
    );
}

export const MainCards: React.FC<Props> = (props) => {
    const teams = trpc.getAllTeams.useQuery(props.userId);
    const projects = trpc.getAllProjects.useQuery(props.userId);
    const tasks = trpc.getTasksByStatus.useQuery({
        userId: props.userId,
        status: "active",
    });

    return (
        <div className="flex gap-4 md:gap-16 justify-between flex-wrap max-w-5xl">
            <MainCard
                title="Teams"
                value={teams.data?.length ?? 0}
                icon={<Users2 />}
                isLoading={teams.isFetching}
            />

            <MainCard
                title="Projects"
                value={projects.data?.length ?? 0}
                icon={<FolderOpen />}
                isLoading={projects.isFetching}
            />

            <MainCard
                title="Active tasks"
                value={tasks.data?.length ?? 0}
                icon={<CheckCircle2 />}
                isLoading={tasks.isFetching}
            />
        </div>
    );
};
