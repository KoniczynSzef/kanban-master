"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { FC } from "react";
import NavigationMenu from "./menu/NavigationMenuWrapper";
import HamburgerMenu from "./HamburgerMenu";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";

interface Props {}

const Navbar: FC<Props> = () => {
    const { user } = useKindeBrowserClient();

    return (
        <header className="mt-4 py-4 left-4 right-4 md:left-16 md:right-16 lg:left-36 lg:right-36 border-purple-300 border-2 rounded-2xl fixed self-center z-50 backdrop-blur flex justify-around items-center">
            <HomeLink />

            <NavigationMenu className="hidden md:block" />

            <AuthSection user={user} className="hidden md:flex gap-4" />

            <HamburgerMenu
                className="block md:hidden"
                isUserLoggedIn={!!user}
            />
        </header>
    );
};

export default Navbar;
