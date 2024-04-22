import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { FC } from "react";
import NavigationMenu from "./menu/NavigationMenuWrapper";
import AuthButtons from "./auth-state/AuthButtons";
import LoggedUser from "./auth-state/LoggedUser";
import HamburgerMenu from "./HamburgerMenu";
import HomeLink from "./HomeLink";

interface Props {}

const Navbar: FC<Props> = async () => {
    const { isAuthenticated } = getKindeServerSession();

    const isUserLoggedIn = await isAuthenticated();

    return (
        <header className="mt-4 py-6 left-4 right-4 md:left-16 md:right-16 lg:left-40 lg:right-40  border-purple-300 border-2 rounded-2xl fixed self-center z-50 backdrop-blur flex justify-around items-center">
            <HomeLink />

            <NavigationMenu className="hidden md:block" />

            <div className="hidden md:flex gap-8">
                {isUserLoggedIn ? <LoggedUser /> : <AuthButtons />}
            </div>

            <HamburgerMenu className="block md:hidden" />
        </header>
    );
};

export default Navbar;
