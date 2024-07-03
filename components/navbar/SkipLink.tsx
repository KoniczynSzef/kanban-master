import Link from "next/link";
import React from "react";

interface Props {}

export const SkipLink: React.FC<Props> = () => {
    return (
        <Link
            href={"#main-content"}
            className={`absolute left-2 top-2 px-4 py-3 bg-primary text-white rounded-sm z-50 hover:bg-primary/95 transition -translate-x-64 focus:translate-x-0 hovered__link`}
            tabIndex={0}
        >
            Skip to main content
        </Link>
    );
};
