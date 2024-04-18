import { z } from "zod";

export const createTeamSchema = z.object({
    name: z.string(),
    description: z.string(),
});

export type CreateTeamSchema = z.infer<typeof createTeamSchema>;
