import React, { FC } from "react";
import HeroDescription from "./HeroDescription";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { linkStyle } from "@/lib/link-style";
import { Github } from "lucide-react";
import Link from "next/link";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="relative text-center flex flex-col items-center gap-4">
            <Link
                href={
                    "https://github.com/koniczynszef/kanban-master/contribute"
                }
                className={cn(
                    linkStyle,
                    "bg-secondary-foreground text-white px-2 py-1 rounded-full focus:ring-secondary-foreground"
                )}
            >
                Feel free to contribute!
            </Link>
            <h1 className="text-7xl font-bold">Manage your workflow</h1>

            <HeroDescription />

            <div className="flex gap-8 relative mt-8">
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
        </div>
    );
};

export default HeroSection;
