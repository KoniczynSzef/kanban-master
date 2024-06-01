import { z } from "zod";

export const searchbarSchema = z.object({
    input: z.string(),
    sortByName: z.enum(["Sort by name", "Sort by date"]),
});

export type SearchbarSchema = z.infer<typeof searchbarSchema>;
