import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function getKindeUser(req?: NextRequest) {
    const { getUser } = getKindeServerSession(req);
    return await getUser();
}
