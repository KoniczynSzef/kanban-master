import { linkStyle } from "@/lib/link-style";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {}

export const ContributeBadge: React.FC<Props> = () => {
    return (
        <Link
            href={"https://github.com/koniczynszef/kanban-master/contribute"}
            className={cn(
                linkStyle,
                "bg-secondary text-white px-4 py-1 rounded-full focus:ring-secondary-foreground hover:bg-secondary/85"
            )}
        >
            Feel free to contribute!
        </Link>
    );
};
