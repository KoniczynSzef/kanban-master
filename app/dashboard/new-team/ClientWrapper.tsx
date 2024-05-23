"use client";

import WelcomeToDashboard from "@/components/dashboard/welcome-to-dashboard/WelcomeToDashboard";
import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";

interface Props {
    kindeUser: KindeUser;
}

const ClientWrapper: FC<Props> = (props) => {
    const { data } = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    if (!data) {
        return <div>No data</div>;
    }

    return <WelcomeToDashboard user={data.user} isWelcomePage={false} />;
};

export default ClientWrapper;