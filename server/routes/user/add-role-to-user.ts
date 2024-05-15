import { UserRole } from "@/types/models/user-model";
import { getUserByKindeId } from "../auth/get-user-by-kinde-id";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function addRoleToUser(kindeId: string, role: UserRole) {
    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.teamRole) {
        return {
            success: false,
            message: "User already has a role",
        };
    }

    await db
        .update(users)
        .set({
            teamRole: role,
        })
        .where(eq(users.kindeId, kindeId));

    return {
        success: true,
        message: "Role added successfully",
    };
}
