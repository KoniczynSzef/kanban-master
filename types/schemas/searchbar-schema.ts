import { z } from "zod";

export type SortingStrategy = "Sort by name" | "Sort by date" | "Default";

const sortingArray = ["Sort by name", "Sort by date", "Default"] as const;

export const searchbarSchema = z.object({
    input: z.string(),
    sortingStrategy: z.enum([...sortingArray]),
});

export type SearchbarSchema = z.infer<typeof searchbarSchema>;
