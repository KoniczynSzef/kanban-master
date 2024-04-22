"use client";

import React, { FC } from "react";
import * as Sheet from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const HamburgerMenu: FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <Sheet.Sheet>
                <Sheet.SheetTrigger asChild>
                    <Button size={"icon"}>
                        <Menu />
                    </Button>
                </Sheet.SheetTrigger>
            </Sheet.Sheet>
        </div>
    );
};

export default HamburgerMenu;
