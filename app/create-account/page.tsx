import CreateUser from "@/components/auth/CreateUser";
import { Button } from "@/components/ui/button";
import { getUserByKindeId } from "@/server/auth/get-user-by-kinde-id";
import {
    LogoutLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
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

    const { data: user } = await getUserByKindeId(kindeUser.id);

    return (
        <>
            <CreateUser user={user} kindeUser={kindeUser} />
            <LogoutLink>
                <Button variant={"destructive"}>Logout</Button>
            </LogoutLink>
        </>
    );
};

export default page;
