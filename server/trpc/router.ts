import SuperJSON from "superjson";
import { publicProcedure, router } from "./server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { db } from "@/database";
import { users } from "@/database/schema";
import { z } from "zod";
import { getUserByKindeId } from "@/server/routes/auth/get-user-by-kinde-id";
import { validateAccount } from "../routes/auth/validate-account";
import { CreateUserSchema } from "@/types/schemas/create-user.schema";

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
});

export const createSSRHelper = () => {
    return createServerSideHelpers({
        router: appRouter,
        transformer: SuperJSON,
        ctx: () => {},
    });
};

export type AppRouter = typeof appRouter;
