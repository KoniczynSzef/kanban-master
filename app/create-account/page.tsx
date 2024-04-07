import CreateUser from "@/components/auth/CreateUser";
import { Button } from "@/components/ui/button";
import { db } from "@/database";
import { users } from "@/database/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async (props) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/");
    }

    const newUser: typeof users.$inferInsert = {
        email: user.email || "",
        name: user.given_name || "",
        picture: user.picture || "",
        kindeId: user.id,
    };

    return (
        <div>
            <p>
                {user.email} {user.id}
            </p>

            <CreateUser user={newUser} />
        </div>
    );
};

export default page;
