import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
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
        const newUser: typeof users.$inferInsert = {
            name: user.given_name || "user",
            email: user.email || "",
            picture: user.picture || "",
            kindeId: user.id,
        };

        await db.insert(users).values(newUser);
    }

    return redirect(process.env.PAGE_URL as string);
}
