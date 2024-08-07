import React, { FC } from "react";
import { Nav } from "./menu/Nav";
import HamburgerMenu from "./HamburgerMenu";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";
import { getKindeUser } from "@/lib/auth/get-kinde-user";

interface Props {}

const Navbar: FC<Props> = async () => {
    const user = await getKindeUser();

    return (
        <header className="py-6 relative w-full">
            <nav className="flex justify-between items-center container">
                <HomeLink />

                <Nav className="hidden md:flex" />

                <AuthSection user={user} className="hidden md:flex gap-4" />

                <HamburgerMenu className="block md:hidden" user={user} />
            </nav>
        </header>
    );
};

export default Navbar;
