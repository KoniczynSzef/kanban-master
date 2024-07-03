"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    href: string;
    icon: React.ReactNode;
    text: string;
}

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
                className={`flex items-end gap-2.5 px-4 py-2 rounded-[8px] transition duration-300 ${isActiveClassName}`}
            >
                {props.icon}
                <span className="font-medium">{props.text}</span>
            </Link>
        </li>
    );
};
