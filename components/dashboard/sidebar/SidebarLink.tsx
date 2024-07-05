"use client";

import { SidebarContext } from "@/context/sidebar/sidebar-context";
import { cn } from "@/lib/utils";
import { SidebarLink as SidebarLinkProps } from "@/types/dashboard/sidebar-link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends SidebarLinkProps {}

export const SidebarLink: React.FC<Props> = (props) => {
    const { isExpanded } = React.useContext(SidebarContext);
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
                    `flex items-end gap-2.5 px-4 py-3 !rounded-[8px] transition duration-300 ${isActiveClassName} focus-visible:ring-foreground/25`,
                    isExpanded ? " px-4 py-3" : "p-3"
                )}
            >
                {isExpanded ? (
                    <>
                        {props.icon}
                        <span className="font-medium">{props.text}</span>
                    </>
                ) : (
                    props.icon
                )}
            </Link>
        </li>
    );
};
