import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getActiveTasks } from "./get-active-tasks";

export const teamRouter = router({
    getActiveTasks: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return getActiveTasks(input);
        }),
});
