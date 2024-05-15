import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/auth/is-authenticated";

export default async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated(req);

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
