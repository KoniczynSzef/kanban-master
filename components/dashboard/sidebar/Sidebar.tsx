import HomeLink from "@/components/navbar/HomeLink";
import { LogoutButton } from "@/components/navbar/auth/LogoutButton";
import { ToggleMode } from "@/components/navbar/mode/ToggleMode";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { SkipLink } from "@/components/navbar/SkipLink";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="w-[16rem] top-0 bottom-0 fixed bg-slate-50/25 dark:bg-slate-900/25 flex flex-col p-8">
            <SkipLink />
            <HomeLink className="text-center" />

            <ul className="my-16 flex flex-col gap-3">
                {SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={crypto.randomUUID()} {...link} />
                ))}
            </ul>

            <div className="flex flex-col items-center gap-4 mt-auto">
                <ToggleMode />
                <LogoutButton />
            </div>
        </aside>
    );
};
