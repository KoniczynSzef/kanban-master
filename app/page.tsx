import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/database";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
        return (
            <div>
                Not authenticated
                <RegisterLink postLoginRedirectURL="/api/auth/check-for-account">
                    <Button>Register</Button>
                </RegisterLink>
                <LoginLink>
                    <Button variant={"outline"}>Login</Button>
                </LoginLink>
            </div>
        );
    }

    const newProjects = await db.query.projects.findMany();
    const user = await getUser();

    return (
        <div className="p-24">
            <h1>Projects</h1>
            <p>Here are the projects you have access to:</p>
            <ul>
                {newProjects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>

            <LogoutLink postLogoutRedirectURL="/">
                <Button variant={"destructive"}>Sign out</Button>
            </LogoutLink>

            {JSON.stringify(user, null, 2)}
        </div>
    );
};

export default page;
