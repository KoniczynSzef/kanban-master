"use client";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import React, { FC } from "react";
import NavMenuItem from "./NavMenuItem";
import { navMenuItems } from "@/assets/nav-menu-items";
import { Github } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const NavigationMenuWrapper: FC<Props> = (props) => {
    return (
        <NavigationMenu.NavigationMenu className={props.className}>
            <NavigationMenu.NavigationMenuList className="flex gap-4 items-center">
                {navMenuItems.map((navItem) => (
                    <NavMenuItem key={navItem.triggerTitle} navItem={navItem} />
                ))}
                <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuLink
                        href="https://github.com/KoniczynSzef"
                        className={`${NavigationMenu.navigationMenuTriggerStyle()} flex gap-2`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </NavigationMenu.NavigationMenuLink>
                </NavigationMenu.NavigationMenuItem>
            </NavigationMenu.NavigationMenuList>
            <NavigationMenu.NavigationMenuViewport />
        </NavigationMenu.NavigationMenu>
    );
};

export default NavigationMenuWrapper;
