import { users } from "@/database/schema";
import { PossibleProducts } from "@/types/dashboard/PossibleProducts";
import { InferSelectModel } from "drizzle-orm";

export function getAmountOfPossibleProductsByPlan(
    plan: InferSelectModel<typeof users>["plan"]
): PossibleProducts {
    if (!plan)
        return {
            notes: 0,
            projects: 0,
            tasks: 0,
            teams: 0,
        };

    switch (plan) {
        case "free":
            return {
                notes: 50,
                projects: 10,
                tasks: 15,
                teams: 3,
            };

        case "pro":
            return {
                notes: 100,
                projects: 20,
                tasks: 30,
                teams: 5,
            };

        case "enterprise":
            // Here I will add new logic to handle custom enterprise plans
            return {
                notes: 0,
                projects: 0,
                tasks: 0,
                teams: 0,
            };
    }
}
