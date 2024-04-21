import { type NavMenuItem as TNavMenuItem } from "@/types/nav-menu-item";
import React, { FC } from "react";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
    navItem: TNavMenuItem;
}

const NavMenuItem: FC<Props> = (props) => {
    return (
        <NavigationMenu.NavigationMenuItem>
            <NavigationMenu.NavigationMenuTrigger>
                {props.navItem.triggerTitle}
            </NavigationMenu.NavigationMenuTrigger>
            <NavigationMenu.NavigationMenuContent className="p-4 py-6 grid grid-cols-2 md:w-[600px] gap-8">
                {props.navItem.content.map((item) => (
                    <div
                        key={item.href}
                        className="flex flex-col items-start gap-1"
                    >
                        <Link href={item.href}>
                            <NavigationMenu.NavigationMenuLink
                                href={item.href}
                                className={NavigationMenu.navigationMenuTriggerStyle()}
                            >
                                {item.title}
                            </NavigationMenu.NavigationMenuLink>
                        </Link>
                        <p className="text-sm text-muted-foreground ml-4">
                            {item.itemDescription}
                        </p>
                    </div>
                ))}
            </NavigationMenu.NavigationMenuContent>
        </NavigationMenu.NavigationMenuItem>
    );
};

export default NavMenuItem;
