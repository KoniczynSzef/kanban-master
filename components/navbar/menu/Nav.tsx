"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {}

export const Nav: React.FC<Props> = () => {
    return (
        <div className="text-muted-foreground font-medium flex items-center gap-4">
            <NavItem title="Overview" href="#overview" />
            <NavItem title="Features" href="#features" />
            <NavItem title="Pricing" href="#pricing" />
            <NavItem title="Dashboard" href="/dashboard" />
        </div>
    );
};

interface NavItemProps {
    title: string;
    href: string;
}

function NavItem(props: NavItemProps) {
    const path = usePathname();

    const href = React.useMemo(() => {
        if (props.href.startsWith("/")) {
            return props.href;
        }

        return `/${props.href}`;
    }, [path]);

    return (
        <Link
            href={href}
            className={cn(
                "hovered__link",
                "hover:text-primary dark:hover:text-purple-200/90 p-3"
            )}
        >
            {props.title}
        </Link>
    );
}
