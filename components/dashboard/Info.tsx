"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";

interface Props {
    kindeUser: KindeUser;
}

const Info: FC<Props> = (props) => {
    const { data } = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Info;
