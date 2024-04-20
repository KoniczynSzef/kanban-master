"use client";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const NavigationMenuWrapper: FC<Props> = () => {
    return (
        <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList>
                <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuTrigger>
                        Projects
                    </NavigationMenu.NavigationMenuTrigger>
                    <NavigationMenu.NavigationMenuContent className="p-4">
                        <Link href="/projects">
                            <NavigationMenu.NavigationMenuLink
                                className={NavigationMenu.navigationMenuTriggerStyle()}
                            >
                                All Projects
                            </NavigationMenu.NavigationMenuLink>
                        </Link>
                        <Link href="/projects/new">
                            <NavigationMenu.NavigationMenuLink
                                className={NavigationMenu.navigationMenuTriggerStyle()}
                            >
                                New Project
                            </NavigationMenu.NavigationMenuLink>
                        </Link>
                    </NavigationMenu.NavigationMenuContent>
                </NavigationMenu.NavigationMenuItem>
            </NavigationMenu.NavigationMenuList>
        </NavigationMenu.NavigationMenu>
    );
};

export default NavigationMenuWrapper;
