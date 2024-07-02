import React, { FC } from "react";
import * as Sheet from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Nav } from "./menu/Nav";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    user: KindeUser | null;
}

const HamburgerMenu: FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <Sheet.Sheet>
                <Sheet.SheetTrigger asChild>
                    <Button size={"icon"}>
                        <Menu />
                    </Button>
                </Sheet.SheetTrigger>

                <Sheet.SheetContent className="flex flex-col items-center">
                    <HomeLink className="" />

                    <Nav className="flex flex-col" />

                    <AuthSection
                        user={props.user}
                        className="flex flex-col items-center gap-4"
                    />
                </Sheet.SheetContent>
            </Sheet.Sheet>
        </div>
    );
};

export default HamburgerMenu;
