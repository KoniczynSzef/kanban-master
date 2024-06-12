"use client";

import React from "react";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
    if (document.title !== "Dashboard | KanMaster") {
        return null;
    }

    return (
        <div className="fixed top-44 right-0 bottom-0 h-full border border-slate-50 w-[300px] p-8 rounded-2xl">
            <p>test</p>
        </div>
    );
};
