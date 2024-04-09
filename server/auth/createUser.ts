"use server";

import { db } from "@/database";
import { User } from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createUser(user: typeof User.$inferInsert) {
    const existingUser = await db.query.User.findFirst({
        where: eq(User.kindeId, user.kindeId),
    });

    if (existingUser) {
        return;
    }

    const newUser = await db.insert(User).values(user).returning();
    revalidatePath("/");

    return newUser;
}
