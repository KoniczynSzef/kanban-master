import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware() {
    const { getUser, isAuthenticated } = getKindeServerSession();

    console.log("middleware");

    const user = await getUser();
    const isAuth = await isAuthenticated();

    console.log("middleware", isAuth, user);
}

export const config = {
    matcher: ["/dashboard"],
};
