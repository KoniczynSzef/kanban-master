"use server";

import { db } from "@/database";
import { User } from "@/database/schema";
import { safeAction } from "@/lib/safe-action";
import { CreateUserSchema } from "@/types/schemas/create-user.schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
    kindeId: z.string(),
    user: z.object(CreateUserSchema.shape),
});

export const createUser = safeAction(schema, async ({ kindeId, user }) => {
    const existingUser = await db.query.User.findFirst({
        where: eq(User.kindeId, kindeId),
    });

    if (!existingUser) {
        return null;
    }

    const newUser = await db.update(User).set(user).returning();

    revalidatePath("/");

    return newUser;
});
