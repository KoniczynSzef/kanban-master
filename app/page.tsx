import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import {
    getUserByKindeId,
    isUserValidated,
} from "@/server/auth/getUserByKindeId";
import { redirect } from "next/navigation";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();
    const kindeUser = await getUser();

    if (!isLoggedIn || !kindeUser) {
        return (
            <div>
                Not authenticated
                <RegisterLink postLoginRedirectURL="/api/auth/createUser">
                    <Button>Register</Button>
                </RegisterLink>
                <LoginLink postLoginRedirectURL="/api/auth/check-for-account">
                    <Button variant={"outline"}>Login</Button>
                </LoginLink>
            </div>
        );
    }

    const user = await getUserByKindeId(kindeUser.id);

    if (!(await isUserValidated(kindeUser.id))) {
        return redirect("/create-account");
    }

    return (
        <div className="p-24">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <LogoutLink postLogoutRedirectURL="/">
                <Button variant={"destructive"} className="my-16">
                    Sign out
                </Button>
            </LogoutLink>
        </div>
    );
};

export default page;
