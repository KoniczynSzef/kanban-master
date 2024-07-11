import { LogoutButton } from "@/components/navbar/auth/LogoutButton";
import { ToggleMode } from "@/components/navbar/mode/ToggleMode";
import React from "react";

interface Props {
    pageTitle: string;
    description: string;
}

export const Header: React.FC<Props> = (props) => {
    return (
        <header id="page" className="flex w-full justify-between">
            <div>
                <h1 className="font-semibold text-2xl">{props.pageTitle}</h1>
                <p className="mt-2 text-muted-foreground">
                    {props.description}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <ToggleMode />
                <LogoutButton />
            </div>
        </header>
    );
};
