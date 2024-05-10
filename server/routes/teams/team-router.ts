import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { createTeam } from "./create-team";
import { createTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { getUserAndTeams } from "./get-user-and-teams";

export const teamRouter = router({
    getUserAndTeams: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await getUserAndTeams(input);
        }),

    createTeam: publicProcedure
        .input(
            z.object({
                kindeId: z.string(),
                data: createTeamSchema,
            })
        )
        .mutation(async ({ input: { kindeId, data } }) => {
            return await createTeam(kindeId, data);
        }),
});
