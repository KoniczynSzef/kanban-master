import HomeLink from "@/components/navbar/HomeLink";
import React from "react";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="w-[20rem] top-0 bottom-0 border-r fixed border-r-purple-50 flex flex-col p-8 items-center">
            <HomeLink />

            <h3 className="mt-auto">Test</h3>
        </aside>
    );
};
