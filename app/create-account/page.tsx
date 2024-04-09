import CreateUser from "@/components/auth/CreateUser";
import { db } from "@/database";
import { User } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const kindeUser = await getUser();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn || !kindeUser) {
        return redirect("/");
    }

    const user = await db.query.User.findFirst({
        where: eq(User.kindeId, kindeUser.id),
    });

    if (!user) {
        return redirect("/");
    }

    return (
        <>
            {JSON.stringify(user, null, 2)}
            <CreateUser user={user} />
        </>
    );
};

export default page;
