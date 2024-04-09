"use server";

import { db } from "@/database";
import { User } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getUserByKindeId(kindeId: string) {
    const user = await db.query.User.findFirst({
        where: eq(User.kindeId, kindeId),
    });

    if (!user) return null;

    return user;
}

export async function isUserValidated(kindeId: string) {
    const user = await getUserByKindeId(kindeId);

    if (!user) return false;

    return user.validated;
}
