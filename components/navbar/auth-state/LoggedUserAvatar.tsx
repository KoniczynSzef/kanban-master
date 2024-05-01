"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/server/trpc";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
    kindeId: string;
}

const LoggedUserAvatar: FC<Props> = (props) => {
    const { data: user, isLoading } = trpc.getUserByKindeId.useQuery(
        props.kindeId
    );

    if (isLoading) {
        return <Skeleton className="aspect-square rounded-full h-12" />;
    }

    if (!user || !user.validated) {
        return (
            <Link href="/create-account">
                <Button>Validate account</Button>
            </Link>
        );
    }

    return (
        <Avatar className="border border-secondary">
            <AvatarFallback>{user.name[0].toLocaleUpperCase()}</AvatarFallback>
            <AvatarImage src={user.picture} alt={user.name} />
        </Avatar>
    );
};

export default LoggedUserAvatar;
