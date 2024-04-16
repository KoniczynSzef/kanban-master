"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import { motion } from "framer-motion";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const { data: user } = trpc.getUserByKindeId.useQuery(props.kindeUser.id);

    if (!user) return null;

    return (
        <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <Avatar>
                <AvatarImage src={user.picture} />
                <AvatarFallback>
                    {user.name.slice(0, 2).toLocaleUpperCase()}
                </AvatarFallback>
            </Avatar>
        </motion.div>
    );
};

export default Account;
