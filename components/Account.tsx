"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const { data } = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    const { mutate: createTeam, isLoading } = trpc.createTeam.useMutation({
        onSettled: () => {},

        onSuccess: (data) => {
            toast.success(`Team "${data.name}" created!`);
        },
    });

    if (!data) return null;

    const { user, teams } = data;

    return (
        <motion.div
            className="flex justify-between w-full p-4 rounded-lg border border-secondary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="space-y-16">
                <pre>{JSON.stringify(user, null, 2)}</pre>

                <Avatar>
                    <AvatarImage src={user.picture} />
                    <AvatarFallback>
                        {user.name.slice(0, 2).toLocaleUpperCase()}
                    </AvatarFallback>
                </Avatar>

                <Button
                    onClick={() =>
                        createTeam({
                            userId: user.id,
                            data: {
                                name: "My Team" /** This is just a placeholder */,
                                description: "My Team Description",
                            },
                        })
                    }
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Create Team"
                    )}
                </Button>
            </div>

            {teams.map((team) => (
                <pre key={team.id}>{JSON.stringify(team, null, 2)}</pre>
            ))}
        </motion.div>
    );
};

export default Account;
