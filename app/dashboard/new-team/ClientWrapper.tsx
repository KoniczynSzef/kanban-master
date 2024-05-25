"use client";

import WelcomeToDashboard from "@/components/dashboard/welcome-to-dashboard/WelcomeToDashboard";
import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";

interface Props {
    kindeUser: KindeUser;
}

const ClientWrapper: FC<Props> = (props) => {
    const { data: user } = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    if (!user) {
        return <div>No user found</div>;
    }

    return <WelcomeToDashboard user={user} isWelcomePage={false} />;
};

export default ClientWrapper;
