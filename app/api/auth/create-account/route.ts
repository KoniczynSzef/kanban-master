import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { UserInsert } from "@/types/models/user-model";
import { getKindeUser } from "@/lib/auth/get-kinde-user";

export async function POST() {
    const user = await getKindeUser();

    if (!user) {
        return new Response("Unauthorized", {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    const userFromDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (userFromDB) {
        return new Response("Account already exists", { status: 200 });
    }

    const newUser: UserInsert = {
        name: user.given_name || "user",
        email: user.email || "",
        picture: user.picture || "",
        kindeId: user.id,
        validated: true,
    };

    await db.insert(users).values(newUser);

    return new Response("Account created successfully", { status: 200 });
}
