import { Button } from "@/components/ui/button";
import { linkStyle } from "@/lib/link-style";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import FeaturesGrid from "./FeaturesGrid";
import Image from "next/image";

import arrow from "@/images/arrow.svg";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col gap-32 items-center">
            <div className="flex gap-8 relative">
                <h2 className="text-3xl font-medium text-primary">
                    Explore power of Kanban
                </h2>
                <Link href="/features" className={cn(linkStyle, "flex w-min")}>
                    <Button tabIndex={-1}>Learn More</Button>
                </Link>

                <Image
                    src={arrow}
                    alt="Arrow just for UI"
                    className="absolute right-1/4 top-1/2 translate-y-1/4"
                />
            </div>

            <FeaturesGrid />
        </section>
    );
};

export default LayoutGrid;
