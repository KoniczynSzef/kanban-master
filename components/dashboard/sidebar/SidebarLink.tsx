"use client";

import { cn } from "@/lib/utils";
import { SidebarLink as SidebarLinkProps } from "@/types/dashboard/sidebar-link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends SidebarLinkProps {}

export const SidebarLink: React.FC<Props> = (props) => {
    const path = usePathname();

    const isActiveClassName =
        props.href === path
            ? "text-foreground bg-slate-200/75 dark:bg-slate-800/75"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground";

    return (
        <li>
            <Link
                href={props.href}
                className={cn(
                    "hovered__link",
                    `flex items-end gap-2.5 px-4 py-3 !rounded-[8px] transition duration-300 ${isActiveClassName} focus-visible:ring-foreground/25`
                )}
            >
                {props.icon}
                <span className="font-medium">{props.text}</span>
            </Link>
        </li>
    );
};
