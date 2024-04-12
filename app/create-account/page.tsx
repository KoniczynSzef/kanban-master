import CreateUser from "@/components/auth/CreateUser";
import { Button } from "@/components/ui/button";
import {
    LogoutLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { trpc } from "../_trpc/client";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const kindeUser = await getUser();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn || !kindeUser) {
        return redirect("/");
    }

    /**
     * ! This doesn't work in server components
     */
    const { data: user } = trpc.getUserByKindeId.useQuery(kindeUser.id);

    console.log(user);

    // await getUserByKindeId(kindeUser.id);

    if (user?.validated) {
        return redirect("/");
    }

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
