import React, { FC } from "react";
import * as Sheet from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavigationMenuWrapper from "./menu/NavigationMenuWrapper";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isUserLoggedIn: boolean;
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

                <Sheet.SheetContent className="">
                    <HomeLink className="" />

                    <NavigationMenuWrapper className="mt-8" />

                    <AuthSection isUserLoggedIn={props.isUserLoggedIn} />
                </Sheet.SheetContent>
            </Sheet.Sheet>
        </div>
    );
};

export default HamburgerMenu;
