import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log(user);

    if (!user) {
        return new Response(JSON.stringify({ status: "Unathorized" }), {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    const isUserInDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (isUserInDB) {
        return redirect("/");
    }

    const newUser: typeof users.$inferInsert = {
        name: user.given_name || "user",
        email: user.email || "",
        picture: user.picture || "",
        kindeId: user.id,
    };

    await db.insert(users).values(newUser);
    return redirect("/create-account");
}
