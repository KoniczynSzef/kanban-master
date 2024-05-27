import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { createTeam } from "./create-team";
import { createTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { getUserAndTeams } from "./get-user-and-teams";
import { getMembersLength } from "./get-members-length";
import { getTeam } from "./get-team";
import { queryTeams } from "./query-teams";

export const teamRouter = router({
    getUserAndTeams: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await getUserAndTeams(input);
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

    queryTeam: publicProcedure.input(z.string()).query(async ({ input }) => {
        return queryTeams(input); // Here should be added array of teams
    }),
});
