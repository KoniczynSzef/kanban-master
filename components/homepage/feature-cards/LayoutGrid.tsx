import { Button } from "@/components/ui/button";
import { linkStyle } from "@/lib/link-style";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import FeaturesGrid from "./FeaturesGrid";
import { Github } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col gap-32 items-center">
            <div className="flex gap-8 relative">
                <LoginLink className={cn(linkStyle, "flex w-min")}>
                    <Button tabIndex={-1}>Get Started</Button>
                </LoginLink>
                <Link
                    href="https://github.com/koniczynszef/kanban-master"
                    className={cn(linkStyle, "flex w-min focus:ring-secondary")}
                    target="_blank"
                >
                    <Button
                        tabIndex={-1}
                        className="flex items-center gap-1"
                        variant={"outline"}
                    >
                        <Github /> GitHub
                    </Button>
                </Link>
            </div>

            <FeaturesGrid />
        </section>
    );
};

export default LayoutGrid;
