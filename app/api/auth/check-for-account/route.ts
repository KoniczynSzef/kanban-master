import { db } from "@/database";
import { User } from "@/database/schema";
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

    const isUserInDB = await db.query.User.findFirst({
        where: eq(User.kindeId, user.id),
    });

    if (!isUserInDB) {
        return redirect("/create-account");
    }

    return redirect("/");
}
