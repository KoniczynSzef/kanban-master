"use server";

import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getUserByKindeId(kindeId: string) {
    const user = await db.query.users.findFirst({
        where: eq(users.kindeId, kindeId),
    });

    if (!user) return null;

    return user;
}
