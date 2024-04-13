import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserByKindeId } from "./get-user-by-kinde-id";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { CreateUserSchemaType } from "@/types/schemas/create-user.schema";

export async function validateAccount(
    kindeId: string,
    data: CreateUserSchemaType
) {
    if (!(await getKindeServerSession().isAuthenticated())) {
        throw new Error("Unauthorized");
    }

    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    await db
        .update(users)
        .set({ ...data, validated: true })
        .where(eq(users.kindeId, kindeId));

    return { success: true };
}
