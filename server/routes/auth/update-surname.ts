import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";

export async function updateSurname(
    kindeId: string,
    surname: string | undefined
) {
    const isAuthenticated = await getKindeServerSession().isAuthenticated();

    if (!isAuthenticated) {
        throw new Error("User is not authenticated");
    }

    if (!surname) return { success: false };

    await db.update(users).set({ surname }).where(eq(users.kindeId, kindeId));

    return { success: true };
}
