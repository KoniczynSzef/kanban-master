import CreateUser from "@/components/auth/CreateUser";
import { getUserByKindeId } from "@/server/auth/get-user-by-kinde-id";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
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

    const user = await getUserByKindeId(kindeUser.id);

    return (
        <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <CreateUser user={user} />
        </>
    );
};

export default page;
