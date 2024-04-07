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

    const allUsers = await db.select().from(users);
    console.log(allUsers);

    return (
        <div>
            <p>
                {user.email} {user.id}
            </p>
        </div>
    );
};

export default page;
