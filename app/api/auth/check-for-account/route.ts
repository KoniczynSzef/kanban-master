import { db } from "@/database";
import { users } from "@/database/schema";
import { UserInsert } from "@/types/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // If the Kinde authorization fails, return an unauthorized response
    if (!user) {
        return new Response(JSON.stringify({ status: "Unathorized" }), {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    const userFromDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (userFromDB) {
        // If the user is already in the database, redirect to the dashboard if the account is validated or to the create account page if it's not

        // prettier-ignore
        return redirect(userFromDB.validated ? "/dashboard" : "/create-account");
    }

    const newUser: UserInsert = {
        name: user.given_name || "user",
        email: user.email || "",
        picture: user.picture || "",
        kindeId: user.id,
    };

    await db.insert(users).values(newUser);
    return redirect("/create-account");
}
