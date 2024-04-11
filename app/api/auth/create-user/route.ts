import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function POST() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return new Response("Unauthorized", {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    const userFromDB = await db.query.User.findFirst({
        where: eq(User.kindeId, user.id),
    });

    if (!userFromDB) {
        const newUser: typeof User.$inferInsert = {
            name: user.given_name || "user",
            email: user.email || "",
            picture: user.picture || "",
            kindeId: user.id,
        };

        await db.insert(User).values(newUser);
        console.log("User created");
    }

    return redirect("/create-account");
}
