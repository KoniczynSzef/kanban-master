import React, { FC } from "react";
import NavigationMenu from "./menu/NavigationMenuWrapper";
import HamburgerMenu from "./HamburgerMenu";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";
import { getKindeUser } from "@/lib/auth/get-kinde-user";

interface Props {}

const Navbar: FC<Props> = async () => {
    const user = await getKindeUser();

    return (
        <header className="py-4 flex justify-around items-center">
            <HomeLink />

            <NavigationMenu className="hidden md:block" />

            <AuthSection user={user} className="hidden md:flex gap-4" />

            <HamburgerMenu className="block md:hidden" user={user} />
        </header>
    );
};

export default Navbar;
