"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {}

export const SkipLink: React.FC<Props> = () => {
    const skipLinkRef = React.useRef<HTMLAnchorElement>(null);
    const path = usePathname();

    const isDashboard = path.startsWith("/dashboard");

    const [className, setClassName] = React.useState("-translate-x-64");

    function handleSkipToContent() {
        const content = isDashboard
            ? document.getElementById("page")
            : document.getElementById("main-content");

        if (!content) {
            return;
        }

        content.focus();
        skipLinkRef.current?.blur();
        setClassName("-translate-x-64");
    }

    return (
        <Link
            ref={skipLinkRef}
            href={isDashboard ? "#page" : "#main-content"}
            className={cn(
                `absolute left-2 top-2 px-4 py-3 bg-primary text-white rounded-sm z-50 hover:bg-primary/95 transition hovered__link`,
                className
            )}
            tabIndex={0}
            onFocus={() => setClassName("translate-x-0")}
            onBlur={() => setClassName("-translate-x-64")}
            onClick={handleSkipToContent}
        >
            Skip to main content
        </Link>
    );
};
