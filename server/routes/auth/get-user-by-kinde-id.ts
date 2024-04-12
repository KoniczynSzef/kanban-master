import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";

export const getUserByKindeId = async (input: string) => {
    const currentUser = await getKindeServerSession().getUser();

    if (!currentUser) return null;

    const user = await db.query.users.findFirst({
        where: eq(users.kindeId, input),
    });

    if (!user) return null;

    return user;
};
