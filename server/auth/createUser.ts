"use server";

import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createUser(user: typeof users.$inferInsert) {
    const existingUser = await db.query.users.findFirst({
        where: eq(users.kindeId, user.kindeId),
    });

    if (existingUser) {
        console.log("User already exists", existingUser);

        return {
            success: false,
            error: "User already exists",
        };
    }

    try {
        const newUser = await db.insert(users).values(user).returning();
        revalidatePath("/");

        console.log("Created user", newUser);

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
