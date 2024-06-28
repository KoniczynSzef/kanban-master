import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const HomeLink: FC<Props> = (props) => {
    return (
        <Link
            href={"/"}
            className={cn(
                "px-4 py-2 rounded-2xl hover:bg-slate-900 transition duration-300 focus:ring-2 focus:ring-primary focus:outline-0 text-2xl",
                props.className
            )}
        >
            KanMaster
        </Link>
    );
};

export default HomeLink;
