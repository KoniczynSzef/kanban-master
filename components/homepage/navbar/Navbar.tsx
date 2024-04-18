import {
    LoginLink,
    LogoutLink,
    RegisterLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React, { FC } from "react";
import NavigationMenu from "./NavigationMenu";
import { Button } from "@/components/ui/button";

interface Props {}

const Navbar: FC<Props> = async () => {
    const { isAuthenticated } = getKindeServerSession();

    const isUserLoggedIn = await isAuthenticated();

    console.log(isUserLoggedIn);

    return (
        <header className="mt-4 container py-6 border-purple-50 border-2 rounded-2xl fixed self-center z-50 backdrop-blur-sm flex justify-between items-center">
            <Link
                href={"/"}
                className="px-4 py-2 rounded-2xl hover:bg-purple-50 transition duration-300 focus:ring-2 focus:ring-primary focus:outline-0"
            >
                KanMaster 🪧
            </Link>

            <NavigationMenu />

            <div className="flex gap-8">
                {isUserLoggedIn ? (
                    <>
                        <Link
                            href={"/dashboard"}
                            className="px-4 py-2 rounded-2xl hover:bg-purple-50 transition duration-300 focus:ring-2 focus:ring-primary focus:outline-0"
                        >
                            Dashboard
                        </Link>
                        <LogoutLink postLogoutRedirectURL="/">
                            <Button variant={"destructive"}>Sign out</Button>
                        </LogoutLink>
                    </>
                ) : (
                    <>
                        <RegisterLink>
                            <Button>Register</Button>
                        </RegisterLink>

                        <LoginLink>
                            <Button variant={"outline"}>Log in</Button>
                        </LoginLink>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
