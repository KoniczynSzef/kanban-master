import { z } from "zod";
import { createAccount, createAccountSchema } from "./auth/create-account";
import { getUserByKindeId } from "./auth/get-user-by-kinde-id";
import { publicProcedure, router } from "./trpc";
import { checkUserValidation } from "./auth/check-user-validation";

export const appRouter = router({
    checkUserValidation: publicProcedure
        .input(z.string())
        .query(async ({ input }) => checkUserValidation(input)),

    createAccount: publicProcedure
        .input(createAccountSchema)
        .mutation(({ input }) => createAccount(input)),

    getUserByKindeId: publicProcedure
        .input(z.string())
        .query(async ({ input }) => await getUserByKindeId(input)),
});

export type AppRouter = typeof appRouter;
