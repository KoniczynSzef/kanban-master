"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import WelcomeToDashboard from "./WelcomeToDashboard";

interface Props {
    kindeUser: KindeUser;
}

const Info: FC<Props> = (props) => {
    const { data: user, refetch } = trpc.getUserByKindeId.useQuery(
        props.kindeUser.id
    );
    const { data, isLoading } = trpc.getUserAndTeams.useQuery(
        props.kindeUser.id
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data || !user) {
        return <div>No data</div>;
    }

    if (user.teamRole) {
        return <div>Role: {data.user.teamRole}</div>;
    }

    if (!user.visitedDashboard) {
        // ! I don't know how to provide the right type for refetch
        // @ts-expect-error Description is provided above
        return <WelcomeToDashboard user={data.user} refetch={refetch} />;
    }

    if (data.teams.length === 0) {
        return (
            <div className="border border-muted flex flex-col p-8 rounded-2xl gap-4">
                Create a team to get started
                <Button className="self-start">Create a team</Button>
            </div>
        );
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Info;
