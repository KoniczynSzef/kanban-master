import { z } from "zod";

export const createNoteSchemaWithUserId = z.object({
    userId: z.string(),
    content: z.string(),
});

export const createNoteSchema = createNoteSchemaWithUserId.omit({
    userId: true,
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;
