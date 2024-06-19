import { z } from "zod";

export const createNoteSchemaWithUserId = z.object({
    userId: z.string(),
    title: z.string(),
    content: z.string().nullable(),
});

export const createNoteSchema = createNoteSchemaWithUserId.omit({
    userId: true,
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;
