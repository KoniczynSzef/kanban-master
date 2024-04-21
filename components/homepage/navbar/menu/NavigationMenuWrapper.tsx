"use client";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import React, { FC } from "react";
import NavMenuItem from "./NavMenuItem";
import { navMenuItems } from "@/assets/nav-menu-items";
import { Github } from "lucide-react";

interface Props {}

const NavigationMenuWrapper: FC<Props> = () => {
    return (
        <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList className="flex gap-4">
                {navMenuItems.map((navItem) => (
                    <NavMenuItem key={navItem.triggerTitle} navItem={navItem} />
                ))}
                <NavigationMenu.NavigationMenuItem>
                    <a
                        href="https://github.com/KoniczynSzef"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavigationMenu.NavigationMenuLink
                            className={`${NavigationMenu.navigationMenuTriggerStyle()} flex gap-2`}
                        >
                            <Github />
                        </NavigationMenu.NavigationMenuLink>
                    </a>
                </NavigationMenu.NavigationMenuItem>
            </NavigationMenu.NavigationMenuList>
            <NavigationMenu.NavigationMenuViewport />
        </NavigationMenu.NavigationMenu>
    );
};

export default NavigationMenuWrapper;
