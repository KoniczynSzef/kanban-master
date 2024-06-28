import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getUserById(id: string) {
    const user = await db.query.users.findFirst({
        where: eq(users.id, id),
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}
