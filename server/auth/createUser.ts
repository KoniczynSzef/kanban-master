"use server";

import { db } from "@/database";
import { users } from "@/database/schema";
import { revalidatePath } from "next/cache";

export async function createUser(user: typeof users.$inferInsert) {
    try {
        const newUser = await db.insert(users).values(user).returning();
        revalidatePath("/");

        return {
            success: true,
            user: newUser,
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : error,
        };
    }
}
