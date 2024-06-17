import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllNotes } from "./get-all-notes";

export const notesRouter = router({
    getAllNotes: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getAllNotes(input);
    }),
});
