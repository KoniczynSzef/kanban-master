import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/database";
import {
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

interface Props {}

const page: FC<Props> = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
        return (
            <div>
                Not authenticated
                <RegisterLink>
                    <Button>Register</Button>
                </RegisterLink>
            </div>
        );
    }

    const newProjects = await db.query.projects.findMany();
    const user = await getUser();

    return (
        <div className="p-24">
            <p className="text-3xl">Test</p>
            {newProjects.map((project) => (
                <p key={project.id}>{JSON.stringify(project, null, 2)}</p>
            ))}

            <LogoutLink postLogoutRedirectURL="/">
                <Button variant={"destructive"}>Sign out</Button>
            </LogoutLink>

            {JSON.stringify(user, null, 2)}
        </div>
    );
};

export default page;
