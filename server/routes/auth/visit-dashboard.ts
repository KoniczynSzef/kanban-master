import { db } from "@/database";
import { getUserByKindeId } from "./get-user-by-kinde-id";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function visitDashboard(kindeId: string) {
    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    await db
        .update(users)
        .set({ visitedDashboard: true })
        .where(eq(users.kindeId, kindeId));

    return { success: true };
}
