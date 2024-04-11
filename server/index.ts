import { z } from "zod";
import { createAccount, createAccountSchema } from "./auth/create-account";
import { getUserByKindeId } from "./auth/get-user-by-kinde-id";
import { publicProcedure, router } from "./trpc";
import { db } from "@/database";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";

export const appRouter = router({
    checkUserValidation: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const user = await db.query.users.findFirst({
                where: eq(users.kindeId, opts.input),
            });

            if (!user) return false;

            return user.validated;
        }),

    createAccount: publicProcedure
        .input(createAccountSchema)
        .mutation(({ input }) => createAccount(input)),

    getUserByKindeId: publicProcedure
        .input(z.string())
        .query(async ({ input }) => await getUserByKindeId(input)),
});

export type AppRouter = typeof appRouter;
