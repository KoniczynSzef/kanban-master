import SuperJSON from "superjson";
import { publicProcedure, router } from "./server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { db } from "@/database";
import { users } from "@/database/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const appRouter = router({
    fetchUsers: publicProcedure.query(async () => {
        return await db.select().from(users);
    }),

    createUser: publicProcedure
        .input(z.string())
        .mutation(async ({ input: kindeId }) => {
            return await db
                .update(users)
                .set({ surname: "Kończyk" })
                .where(eq(users.kindeId, kindeId));
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
