import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const HomeLink: FC<Props> = (props) => {
    return (
        <Link
            href={"/"}
            className={cn(
                "hovered__link",
                "px-4 py-2 rounded-2xl hover:bg-secondary text-2xl !ring-foreground/25",
                props.className
            )}
        >
            KanMaster
        </Link>
    );
};

export default HomeLink;
