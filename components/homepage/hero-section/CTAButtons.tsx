import { Button } from "@/components/ui/button";
import { linkStyle } from "@/lib/link-style";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {}

export const CTAButtons: React.FC<Props> = () => {
    return (
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
    );
};
