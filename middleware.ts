import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware(req: NextRequest) {
    const isAuth = await getKindeServerSession(req).isAuthenticated();

    if (!isAuth) {
        return NextResponse.redirect(
            process.env.PAGE_URL +
                "/api/auth/login?post_login_redirect_url=/dashboard"
        );
    }

    console.log("User is authenticated");
}

export const config = {
    matcher: ["/dashboard"],
};
