import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllTasks } from "./get-all-tasks";
import { getTasksByStatus } from "./get-tasks-by-status";

export const taskRouter = router({
    getAllTasks: publicProcedure
        .input(z.string())
        .query(async ({ input: userId }) => {
            return getAllTasks(userId);
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
