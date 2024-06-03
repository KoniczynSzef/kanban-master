import { type NavMenuItem as TNavMenuItem } from "@/types/nav-menu-item";
import React, { FC } from "react";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
    navItem: TNavMenuItem;
}

const NavMenuItem: FC<Props> = (props) => {
    const handleDashboardLoading = (href: string) => {
        if (href === "/dashboard") {
            document.title = "Loading Dashboard...";
        }
    };

    return (
        <NavigationMenu.NavigationMenuItem>
            <NavigationMenu.NavigationMenuTrigger>
                {props.navItem.triggerTitle}
            </NavigationMenu.NavigationMenuTrigger>
            <NavigationMenu.NavigationMenuContent className="p-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:w-[500px] lg:w-[600px]">
                {props.navItem.content.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                    >
                        <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenu.NavigationMenuLink
                                className={NavigationMenu.navigationMenuTriggerStyle()}
                                onClick={() =>
                                    handleDashboardLoading(item.href)
                                }
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
