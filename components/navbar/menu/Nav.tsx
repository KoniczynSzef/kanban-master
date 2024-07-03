"use client";

import { HOMEPAGE_LINKS } from "@/constants/homepage-links";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: React.FC<Props> = (props) => {
    return (
        <div
            className={cn(
                props.className,
                "text-muted-foreground font-medium items-center gap-4 text-sm lg:text-base"
            )}
        >
            {HOMEPAGE_LINKS.map((link) => (
                <NavItem
                    key={crypto.randomUUID()}
                    title={link.title}
                    href={link.href}
                    setIsOpen={props.setIsOpen}
                />
            ))}
        </div>
    );
};

interface NavItemProps {
    title: string;
    href: string;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavItem(props: NavItemProps) {
    const path = usePathname();

    const href = React.useMemo(() => {
        if (props.href.startsWith("/")) {
            return props.href;
        }

        return `/${props.href}`;
    }, [path]);

    function handleClick() {
        if (props.setIsOpen) {
            props.setIsOpen(false);
        }
    }

    return (
        <Link
            href={href}
            className={cn(
                "hovered__link",
                "hover:text-primary dark:hover:text-purple-200/90 p-3"
            )}
            onClick={handleClick}
        >
            {props.title}
        </Link>
    );
}
