import { getKindeUser } from "@/lib/auth/get-kinde-user";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import ClientWrapper from "./ClientWrapper";
import { createHelpers } from "@/utils/helpers";

interface Props {}

const page: FC<Props> = async () => {
    const kindeUser = await getKindeUser();

    if (!kindeUser) {
        return redirect(
            process.env.PAGE_URL +
                "/api/auth/login?post_login_redirect_url=/dashboard/new-team"
        );
    }

    const helpers = await createHelpers();
    await helpers.getUserAndTeams.prefetch(kindeUser.id);

    return <ClientWrapper kindeUser={kindeUser} />;
};

export default page;
