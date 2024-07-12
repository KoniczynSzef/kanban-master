import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getUserDataSummary } from "./get-user-data-summary";

export const dataRouter = router({
    getUserDataSummary: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return getUserDataSummary(input);
        }),
});
