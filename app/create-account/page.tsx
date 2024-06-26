import CreateAccount from "@/components/auth/CreateAccount";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import { getUserByKindeId } from "@/server/routes/auth/get-user-by-kinde-id";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    const kindeUser = await getKindeUser();

    if (!kindeUser) {
        return redirect("/");
    }

    const user = await getUserByKindeId(kindeUser.id);

    if (user?.validated) {
        return redirect("/");
    }

    return (
        <section className="flex items-center flex-col">
            <h3 className="text-xl font-semibold">
                Let&apos;s start with creating an account
            </h3>

            <p className="text-muted-foreground mt-8">
                You need to create an account before you can start using the
                application.
            </p>

            <CreateAccount user={user} kindeUser={kindeUser} />
        </section>
    );
};

export default page;
