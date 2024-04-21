"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/server/trpc";
import React, { FC } from "react";

interface Props {
    kindeId: string;
}

const LoggedUserAvatar: FC<Props> = (props) => {
    const { data, isLoading } = trpc.getUserAndTeams.useQuery(props.kindeId);

    if (isLoading) {
        return <Skeleton className="aspect-square rounded-full h-12" />;
    }

    if (!data) {
        return null;
    }

    return (
        <Avatar className="border border-secondary">
            <AvatarFallback>
                {data.user.name[0].toLocaleUpperCase()}
            </AvatarFallback>
            <AvatarImage src={data.user.picture} alt={data.user.name} />
        </Avatar>
    );
};

export default LoggedUserAvatar;
