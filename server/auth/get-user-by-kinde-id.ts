"use server";

import { db } from "@/database";
import { User } from "@/database/schema";
import { safeAction } from "@/lib/safe-action";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

const schema = z.string();

export const getUserByKindeId = safeAction(schema, async (kindeId) => {
    const currentUser = await getKindeServerSession().getUser();

    if (!currentUser) return null;

    const user = await db.query.User.findFirst({
        where: eq(User.kindeId, kindeId),
    });

    if (!user) return null;

    return user;
});
