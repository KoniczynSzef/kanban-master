import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllProjects } from "./get-all-projects";

export const teamRouter = router({
    getAllProjects: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await getAllProjects(input);
        }),
});
