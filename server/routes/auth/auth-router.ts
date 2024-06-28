import { publicProcedure, router } from "@/server/trpc/server";
import { getUserByKindeId } from "./get-user-by-kinde-id";
import { z } from "zod";
import { CreateUserSchema } from "@/types/schemas/create-user.schema";
import { validateAccount } from "./validate-account";
import { hasVisitedDashboard } from "./has-visited-dashboard";
import { visitDashboard } from "./visit-dashboard";

export const authRouter = router({
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

    hasVisitedDashboard: publicProcedure
        .input(z.string())
        .query(async ({ input: kindeId }) => {
            return await hasVisitedDashboard(kindeId);
        }),

    visitDashboard: publicProcedure
        .input(z.string())
        .mutation(async ({ input: kindeId }) => {
            return await visitDashboard(kindeId);
        }),
});
