"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader, Loader2 } from "lucide-react";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const userAndTeams = trpc.getUserAndTeams.useQuery(props.kindeUser.id);

    const { data, isLoading: userLoading } = userAndTeams;

    const { mutate: createTeam, isLoading } = trpc.createTeam.useMutation({
        onSettled: () => {},

        onSuccess: async (data) => {
            toast.success(`Team "${data.name}" created!`);
            await userAndTeams.refetch();
        },
    });

    if (userLoading) return <Loader2 className="animate-spin" />;

    if (!data) return null;

    const { user, teams } = data;

    return (
        <div className="flex justify-between w-full p-4 rounded-lg border border-secondary">
            <motion.div
                className="space-y-16"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
            >
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
            </motion.div>

            {teams.map((team, index) => (
                <motion.pre
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key={team.id}
                    transition={{ delay: 0.2 * index }}
                    className="origin-center border border-secondary p-4 rounded-xl h-min"
                >
                    {JSON.stringify(
                        {
                            name: team.name,
                            description: team.description,
                        },
                        null,
                        2
                    )}
                </motion.pre>
            ))}
        </div>
    );
};

export default Account;
