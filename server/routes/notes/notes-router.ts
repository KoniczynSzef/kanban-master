import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { getAllNotes } from "./get-all-notes";
import { createNote } from "./create-note";
import { createNoteSchemaWithUserId } from "@/types/schemas/note/create-note-schema";

export const notesRouter = router({
    getAllNotes: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getAllNotes(input);
    }),

    createNote: publicProcedure
        .input(createNoteSchemaWithUserId)
        .mutation(async ({ input }) => {
            await createNote(input.userId, input.content);
        }),
});
