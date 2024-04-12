import SuperJSON from "superjson";
import { publicProcedure, router } from "./server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { db } from "@/database";
import { users } from "@/database/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { getUserByKindeId } from "@/server/routes/auth/get-user-by-kinde-id";
import { updateSurname } from "@/server/routes/auth/update-surname";

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
        .input(z.string())
        .mutation(async ({ input: kindeId }) => {
            return await db
                .update(users)
                .set({ validated: true })
                .where(eq(users.kindeId, kindeId));
        }),

    createUser: publicProcedure
        .input(z.string())
        .mutation(async ({ input: kindeId }) => {
            return await db
                .update(users)
                .set({ surname: "Kończyk" })
                .where(eq(users.kindeId, kindeId));
        }),

    updateSurname: publicProcedure
        .input(
            z.object({
                kindeId: z.string(),
                surname: z.string().or(z.undefined()),
            })
        )
        .mutation(async ({ input: { kindeId, surname } }) => {
            return await updateSurname(kindeId, surname);
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
