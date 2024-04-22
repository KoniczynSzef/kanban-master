import { createSSRHelper } from "@/server/trpc/router";

export async function createHelpers() {
    const helpers = createSSRHelper();

    return helpers;
}
