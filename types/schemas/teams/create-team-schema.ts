import { z } from "zod";

export const createTeamSchema = z.object({
    name: z.string(),
    description: z.string(),
    teamChatLink: z.string().url(),
    teamColor: z.string(),
});
