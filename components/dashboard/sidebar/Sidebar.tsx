import HomeLink from "@/components/navbar/HomeLink";
import { LogoutButton } from "@/components/navbar/auth/LogoutButton";
import { ToggleMode } from "@/components/navbar/mode/ToggleMode";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import { Home, Settings } from "lucide-react";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="w-[14rem] top-0 bottom-0 fixed bg-slate-50/25 dark:bg-slate-900/25 flex flex-col p-8 items-center">
            <HomeLink />

            <ul className="my-16 flex flex-col gap-4">
                <SidebarLink
                    text="Dashboard"
                    href="/dashboard"
                    icon={<Home />}
                />
                <SidebarLink
                    text="Settings"
                    href="/dashboard/settings"
                    icon={<Settings />}
                />
            </ul>

            <h3 className="mt-auto">Test</h3>
            <ToggleMode />
            <LogoutButton />
        </aside>
    );
};
