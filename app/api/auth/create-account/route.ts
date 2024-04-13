import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { UserInsert } from "@/types/models";

export async function POST() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return new Response("Unauthorized", {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    const userFromDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (!userFromDB) {
        const newUser: UserInsert = {
            name: user.given_name || "user",
            email: user.email || "",
            picture: user.picture || "",
            kindeId: user.id,
            validated: true,
        };

        await db.insert(users).values(newUser);
    }

    return new Response("Account created successfully", { status: 200 });
}
