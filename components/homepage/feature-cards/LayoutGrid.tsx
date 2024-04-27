import { Button } from "@/components/ui/button";
import { linkStyle } from "@/lib/link-style";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import FeaturesGrid from "./FeaturesGrid";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col gap-16">
            <div className="flex justify-evenly items-center">
                <h2 className="text-3xl font-medium text-primary">
                    Explore power of Kanban
                </h2>
                <Link href="/features" className={cn(linkStyle, "flex w-min")}>
                    <Button tabIndex={-1}>Learn More</Button>
                </Link>
            </div>

            <FeaturesGrid />
        </section>
    );
};

export default LayoutGrid;
