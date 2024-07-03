import React, { FC } from "react";
import { Nav } from "./menu/Nav";
import HamburgerMenu from "./HamburgerMenu";
import HomeLink from "./HomeLink";
import { getKindeUser } from "@/lib/auth/get-kinde-user";
import AuthNavigation from "./auth/AuthNavigation";
import { SkipLink } from "./SkipLink";
import { NavbarClientWrapper } from "./NavbarClientWrapper";

interface Props {}

const Navbar: FC<Props> = async () => {
    const user = await getKindeUser();

    return (
        <NavbarClientWrapper>
            <header className="py-6 relative w-full">
                <nav className="flex justify-between items-center container">
                    <SkipLink />
                    <HomeLink />

                    <Nav className="hidden md:flex" />

                    <AuthNavigation
                        user={user}
                        className="hidden md:flex gap-4"
                    />

                    <HamburgerMenu className="block md:hidden" user={user} />
                </nav>
            </header>
        </NavbarClientWrapper>
    );
};

export default Navbar;
