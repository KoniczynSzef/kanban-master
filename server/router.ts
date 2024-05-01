import SuperJSON from "superjson";
import { publicProcedure, router, mergeRouters } from "./trpc/server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { z } from "zod";
import { getUserAndTeams } from "./routes/teams/get-user-and-teams";
import { createTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { createTeam } from "./routes/teams/create-team";
import { authRouter } from "./routes/auth/auth-router";

const teamRouter = router({
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
});

export const appRouter = mergeRouters(authRouter, teamRouter);

export const createSSRHelper = () => {
    return createServerSideHelpers({
        router: appRouter,
        transformer: SuperJSON,
        ctx: () => {},
    });
};

export type AppRouter = typeof appRouter;
