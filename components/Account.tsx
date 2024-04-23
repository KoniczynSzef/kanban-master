"use client";

import { trpc } from "@/server/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader, Loader2 } from "lucide-react";
import { Input } from "./ui/input";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const teamName = React.useRef<HTMLInputElement>(null);
    const teamDescription = React.useRef<HTMLInputElement>(null);

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

    const handleCreateTeam = async () => {
        if (!teamName.current?.value)
            return toast.error("Team Name is required");
        if (!teamDescription.current?.value)
            return toast.error("Team Description is required");

        createTeam({
            userId: user.id,
            data: {
                name: teamName.current.value,
                description: teamDescription.current.value,
            },
        });
    };

    return (
        <div className="flex gap-16 justify-between w-full p-4 rounded-lg flex-col md:flex-row">
            <div className="flex flex-col gap-16">
                <div className="flex gap-4 items-center">
                    <h3 className="text-xl font-semibold">
                        {user.name} ({user.email})
                    </h3>

                    <Avatar>
                        <AvatarImage src={user.picture} />
                        <AvatarFallback>
                            {user.name.slice(0, 2).toLocaleUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </div>

                <form
                    action=""
                    className="space-y-2 border border-secondary p-4 rounded-2xl"
                >
                    <Input placeholder="Team Name..." ref={teamName} />
                    <Input
                        placeholder="Team Description..."
                        ref={teamDescription}
                    />

                    <Button
                        onClick={handleCreateTeam}
                        disabled={isLoading}
                        className="w-full"
                    >
                        {isLoading ? (
                            <Loader className="animate-spin" />
                        ) : (
                            "Create Team"
                        )}
                    </Button>
                </form>
            </div>

            <div className="flex flex-col gap-2">
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
        </div>
    );
};

export default Account;
