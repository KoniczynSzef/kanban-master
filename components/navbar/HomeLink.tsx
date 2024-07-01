import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const HomeLink: FC<Props> = (props) => {
    return (
        <Link
            href={"/"}
            className={cn(
                "px-4 py-2 rounded-2xl hover:bg-secondary transition duration-300 focus:ring-2 font-semibold focus:ring-primary focus:outline-0 text-2xl",
                props.className
            )}
        >
            KanMaster
        </Link>
    );
};

export default HomeLink;
