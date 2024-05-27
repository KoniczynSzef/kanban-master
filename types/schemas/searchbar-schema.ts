import { z } from "zod";

export const searchbarSchema = z.object({
    input: z.string(),
    sortByActivity: z.boolean(),
});

export type SearchbarSchema = z.infer<typeof searchbarSchema>;
