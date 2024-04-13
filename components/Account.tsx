"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const { data: user } = trpc.getUserByKindeId.useQuery(props.kindeUser.id);

    if (!user) return null;

    return (
        <div className="flex flex-col gap-8">
            <h1>Account</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
};

export default Account;
