import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return new Response("Unauthorized", {
            status: 401,
            statusText: "Unauthorized",
        });
    }

    console.log(user);

    console.log(await db.query.users.findMany());

    const isUserInDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (!isUserInDB) {
        return redirect("/create-account");
    }

    return redirect("/");
}
