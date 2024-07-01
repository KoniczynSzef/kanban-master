"use client";

import { cn } from "@/lib/utils";
// import * as NavigationMenu from "@/components/ui/navigation-menu";
// import React, { FC } from "react";
// import NavMenuItem from "./NavMenuItem";
// import { navMenuItems } from "@/assets/nav-menu-items";
// import { Github } from "lucide-react";

// interface Props extends React.HTMLAttributes<HTMLElement> {}

// const NavigationMenuWrapper: FC<Props> = (props) => {
//     return (
//         <NavigationMenu.NavigationMenu className={props.className}>
//             <NavigationMenu.NavigationMenuList className="flex gap-4 items-center mx-auto">
//                 {navMenuItems.map((navItem) => (
//                     <NavMenuItem key={navItem.triggerTitle} navItem={navItem} />
//                 ))}
//                 <NavigationMenu.NavigationMenuItem>
//                     <NavigationMenu.NavigationMenuLink
//                         href="https://github.com/KoniczynSzef"
//                         className={`${NavigationMenu.navigationMenuTriggerStyle()} flex gap-2`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <Github />
//                     </NavigationMenu.NavigationMenuLink>
//                 </NavigationMenu.NavigationMenuItem>
//             </NavigationMenu.NavigationMenuList>
//             <NavigationMenu.NavigationMenuViewport />
//         </NavigationMenu.NavigationMenu>
//     );
// };

// export default NavigationMenuWrapper;

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {}

export const Nav: React.FC<Props> = () => {
    return (
        <div className="text-muted-foreground font-medium">
            <NavItem title="Overview" href="#overview" />
        </div>
    );
};

interface NavItemProps {
    title: string;
    href: string;
}

function NavItem(props: NavItemProps) {
    const path = usePathname();

    if (path !== "/") {
        props.href = "/" + props.href;
    }

    return (
        <Link
            href={props.href}
            className={cn(
                "hovered__link",
                "hover:underline underline-offset-2 p-3"
            )}
        >
            {props.title}
        </Link>
    );
}
