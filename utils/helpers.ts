import { createSSRHelper } from "@/server/trpc/router";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export async function createHelpers(kindeUser: KindeUser) {
    const helpers = createSSRHelper();

    await helpers.fetchUsers.prefetch();
    await helpers.getUserByKindeId.prefetch(kindeUser.id);

    return helpers;
}
