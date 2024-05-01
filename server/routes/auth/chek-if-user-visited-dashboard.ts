import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserByKindeId } from "./get-user-by-kinde-id";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function checkIfUserVisitedDashboard(kindeId: string) {
    if (!(await getKindeServerSession().isAuthenticated())) {
        throw new Error("Unauthorized");
    }

    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    return user.visitedDashboard;
}

export async function visitDashboard(kindeId: string) {
    if (!(await getKindeServerSession().isAuthenticated())) {
        throw new Error("Unauthorized");
    }

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
