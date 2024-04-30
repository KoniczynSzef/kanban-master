"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface Props {
    kindeUser: KindeUser;
}

const Info: FC<Props> = (props) => {
    const { data, isLoading } = trpc.getUserAndTeams.useQuery(
        props.kindeUser.id
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }

    if (data.teams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl self-start gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Info;
