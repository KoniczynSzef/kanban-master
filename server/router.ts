import SuperJSON from "superjson";
import { publicProcedure, router } from "./trpc/server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { db } from "@/database";
import { users } from "@/database/schema";
import { z } from "zod";
import { getUserByKindeId } from "@/server/routes/auth/get-user-by-kinde-id";
import { validateAccount } from "./routes/auth/validate-account";
import { CreateUserSchema } from "@/types/schemas/create-user.schema";
import { getUserAndTeams } from "./routes/teams/get-user-and-teams";
import { createTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { createTeam } from "./routes/teams/create-team";

export const appRouter = router({
    fetchUsers: publicProcedure.query(async () => {
        return await db.select().from(users);
    }),

    getUserByKindeId: publicProcedure
        .input(z.string())
        .query(async ({ input: kindeId }) => {
            return getUserByKindeId(kindeId);
        }),

    validateAccount: publicProcedure
        .input(
            z.object({
                kindeId: z.string(),
                data: CreateUserSchema,
            })
        )
        .mutation(async ({ input: { kindeId, data } }) => {
            return await validateAccount(kindeId, data);
        }),

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

export const createSSRHelper = () => {
    return createServerSideHelpers({
        router: appRouter,
        transformer: SuperJSON,
        ctx: () => {},
    });
};

export type AppRouter = typeof appRouter;
