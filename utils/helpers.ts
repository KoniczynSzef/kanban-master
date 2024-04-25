import { createSSRHelper } from "@/server/router";

export async function createHelpers() {
    const helpers = createSSRHelper();

    return helpers;
}
