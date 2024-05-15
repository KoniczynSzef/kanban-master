import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { CreateUserSchemaType } from "@/types/schemas/create-user.schema";
import { revalidatePath } from "next/cache";

export async function validateAccount(
    kindeId: string,
    data: CreateUserSchemaType
) {
    await db
        .update(users)
        .set({ ...data, validated: true })
        .where(eq(users.kindeId, kindeId));

    revalidatePath("/");

    return { success: true };
}
