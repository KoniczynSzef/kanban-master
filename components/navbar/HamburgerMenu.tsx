import React, { FC } from "react";
import * as Sheet from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavigationMenuWrapper from "./menu/NavigationMenuWrapper";
import HomeLink from "./HomeLink";
import AuthSection from "./auth-state/AuthSection";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

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

                <Sheet.SheetContent className="">
                    <HomeLink className="" />

                    <NavigationMenuWrapper className="mt-8 mx-auto" />

                    <AuthSection user={props.user} />
                </Sheet.SheetContent>
            </Sheet.Sheet>
        </div>
    );
};

export default HamburgerMenu;
