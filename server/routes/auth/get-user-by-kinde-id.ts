import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import { eq } from "drizzle-orm";

export const getUserByKindeId = async (input: string) => {
    const currentUser = await getKindeUser();

    if (!currentUser) return null;

    const user = await db.query.users.findFirst({
        where: eq(users.kindeId, input),
    });

    if (!user) return null;

    return user;
};
