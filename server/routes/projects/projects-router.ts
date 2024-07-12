import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getProjectsByUserId } from "./get-projects-by-user-id";

export const projectsRouter = router({
    getProjectsByUserId: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await getProjectsByUserId(input);
        }),
});
