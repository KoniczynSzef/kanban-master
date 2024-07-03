"use client";

import React, { FC } from "react";
import * as Sheet from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import HomeLink from "./HomeLink";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Nav } from "./menu/Nav";
import AuthNavigation from "./auth/AuthNavigation";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    user: KindeUser | null;
}

const HamburgerMenu: FC<Props> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={cn(props.className, "block md:hidden")}>
            <Sheet.Sheet open={isOpen} onOpenChange={setIsOpen}>
                <Sheet.SheetTrigger asChild>
                    <Button size={"icon"}>
                        <Menu />
                    </Button>
                </Sheet.SheetTrigger>

                <Sheet.SheetContent className="flex flex-col items-center">
                    <HomeLink className="" />

                    <Nav className="flex flex-col" setIsOpen={setIsOpen} />

                    <AuthNavigation
                        user={props.user}
                        className="flex flex-col items-center gap-4"
                    />
                </Sheet.SheetContent>
            </Sheet.Sheet>
        </div>
    );
};

export default HamburgerMenu;
