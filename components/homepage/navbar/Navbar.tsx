import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React, { FC } from "react";
import NavigationMenu from "./menu/NavigationMenuWrapper";
import AuthButtons from "./AuthButtons";
import LoggedUser from "./LoggedUser";

interface Props {}

const Navbar: FC<Props> = async () => {
    const { isAuthenticated } = getKindeServerSession();

    const isUserLoggedIn = await isAuthenticated();

    return (
        <header className="mt-4 container py-6 border-purple-300 border-2 rounded-2xl fixed self-center z-50 backdrop-blur flex justify-around items-center">
            <Link
                href={"/"}
                className="px-4 py-2 rounded-2xl hover:bg-purple-50 transition duration-300 focus:ring-2 focus:ring-primary focus:outline-0 text-2xl"
            >
                KanMaster
            </Link>

            <NavigationMenu />

            <div className="flex gap-8">
                {isUserLoggedIn ? <LoggedUser /> : <AuthButtons />}
            </div>
        </header>
    );
};

export default Navbar;
