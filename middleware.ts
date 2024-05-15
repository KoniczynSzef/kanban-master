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

    // * User is authenticated and can access protected routes and actions
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard",
        "/api/trpc/[trpc]",
        "/create-account",
        "/api/auth/check-for-account",
        "/api/auth/create-account",
    ],
};
