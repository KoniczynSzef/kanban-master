import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();

    if (!(await isAuthenticated()) || !user) {
        return redirect("/");
    }

    const userFromDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    if (user) return <pre>{JSON.stringify(userFromDB, null, 2)}</pre>;
};

export default page;
