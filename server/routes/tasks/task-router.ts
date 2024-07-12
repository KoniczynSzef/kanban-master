import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getTasksByUserId } from "./get-tasks-by-user-id";
import { getTasksByStatus } from "./get-tasks-by-status";

export const taskRouter = router({
    getTasksByUserId: publicProcedure
        .input(z.string())
        .query(async ({ input: userId }) => {
            return getTasksByUserId(userId);
        }),

    getTasksByStatus: publicProcedure
        .input(
            z.object({
                userId: z.string(),
                status: z.enum(["active", "completed", "on hold", "canceled"]),
            })
        )
        .query(async ({ input }) => {
            return getTasksByStatus(input.userId, input.status);
        }),
});
