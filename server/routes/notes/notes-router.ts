import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllNotes } from "./get-all-notes";
import { createNote } from "./create-note";

const createNoteSchema = z.object({
    userId: z.string(),
    title: z.string(),
    content: z.string().nullable(),
});

export const notesRouter = router({
    getAllNotes: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getAllNotes(input);
    }),

    createNote: publicProcedure
        .input(createNoteSchema)
        .mutation(async ({ input }) => {
            await createNote(input.userId, input.title, input.content);
        }),
});
