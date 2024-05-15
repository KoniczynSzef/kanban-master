import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function isAuthenticated(req?: NextRequest) {
    const { isAuthenticated } = getKindeServerSession(req);

    return await isAuthenticated();
}
