import React, { FC } from "react";
import { z } from "zod";

interface Props {}

const createTeamSchema = z.object({
    name: z.string(),
    description: z.string(),
    teamChatLink: z.string().url(),
    teamColor: z.string(),
});

const CreateFirstTeam: FC<Props> = () => {
    return (
        <div>
            <p>Create your first team to get started with your projects</p>
        </div>
    );
};

export default CreateFirstTeam;
