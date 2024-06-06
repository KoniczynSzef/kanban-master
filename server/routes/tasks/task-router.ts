import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllTasks } from "./get-all-tasks";

export const teamRouter = router({
    getAllTasks: publicProcedure
        .input(z.string())
        .query(async ({ input: userId }) => {
            return getAllTasks(userId);
        }),

    getTaskByStatus: publicProcedure
        .input(
            z.object({
                userId: z.string(),
                status: z.enum(["active", "completed", "on hold", "canceled"]),
            })
        )
        .query(async ({ input }) => {
            const tasks = await getAllTasks(input.userId);
            return tasks.filter((task) => task.status === input.status);
        }),
});
