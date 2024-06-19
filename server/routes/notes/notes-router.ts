import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllNotes } from "./get-all-notes";
import { createNote, createNoteSchemaWithUserId } from "./create-note";

export const notesRouter = router({
    getAllNotes: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getAllNotes(input);
    }),

    createNote: publicProcedure
        .input(createNoteSchemaWithUserId)
        .mutation(async ({ input }) => {
            await createNote(input.userId, input.title, input.content);
        }),
});
