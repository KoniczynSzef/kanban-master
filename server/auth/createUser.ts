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
        return;
    }

    const newUser = await db.insert(users).values(user).returning();
    revalidatePath("/");

    return newUser;
}
