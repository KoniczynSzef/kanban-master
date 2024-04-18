import { z } from "zod";

export const CreateProjectSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().max(255).optional(),
});

export type CreateProjectSchemaType = z.infer<typeof CreateProjectSchema>;
