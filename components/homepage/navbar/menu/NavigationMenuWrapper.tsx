"use client";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import React, { FC } from "react";
import NavMenuItem from "./NavMenuItem";
import { navMenuItems } from "@/assets/nav-menu-items";

interface Props {}

const NavigationMenuWrapper: FC<Props> = () => {
    return (
        <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList>
                {navMenuItems.map((navItem) => (
                    <NavMenuItem key={navItem.triggerTitle} navItem={navItem} />
                ))}
            </NavigationMenu.NavigationMenuList>
            <NavigationMenu.NavigationMenuViewport />
        </NavigationMenu.NavigationMenu>
    );
};

export default NavigationMenuWrapper;
