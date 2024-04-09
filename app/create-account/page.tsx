import CreateUser from "@/components/auth/CreateUser";
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
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn || !user) {
        return redirect("/");
    }

    const userFromDB = await db.query.users.findFirst({
        where: eq(users.kindeId, user.id),
    });

    console.log(userFromDB);

    return <CreateUser />;
};

export default page;
