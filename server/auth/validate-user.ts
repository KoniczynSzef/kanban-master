import { safeAction } from "@/lib/safe-action";
import { z } from "zod";
import { getUserByKindeId } from "./get-user-by-kinde-id";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const schema = z.string();

export const validateUser = safeAction(schema, async (kindeId) => {
    const user = await getUserByKindeId(kindeId);

    if (!user) return { success: false, user: null };

    await db
        .update(users)
        .set({ validated: true })
        .where(eq(users.kindeId, kindeId));

    return { success: true, user };
});
