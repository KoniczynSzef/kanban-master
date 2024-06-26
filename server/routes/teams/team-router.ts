import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { createTeam } from "./create-team";
import { createTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { getAllTeams } from "./get-all-teams";
import { getMembersLength } from "./get-members-length";
import { getTeam } from "./get-team";
import { removeTeam } from "./remove-team";

export const teamRouter = router({
    getAllTeams: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getAllTeams(input);
    }),

    createTeam: publicProcedure
        .input(
            z.object({
                userId: z.string(),
                data: createTeamSchema,
            })
        )
        .mutation(async ({ input: { userId, data } }) => {
            return await createTeam(userId, data);
        }),

    getMembersLength: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return (await getMembersLength(input)).length;
        }),

    getTeam: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getTeam(input);
    }),

    removeTeam: publicProcedure
        .input(z.object({ userId: z.string(), teamId: z.string() }))
        .mutation(async ({ input }) => {
            await removeTeam(input.userId, input.teamId);
        }),
});
