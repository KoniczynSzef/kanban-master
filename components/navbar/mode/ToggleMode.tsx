"use client";

import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

interface Props {}

export const ToggleMode: React.FC<Props> = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu.DropdownMenu>
            <DropdownMenu.DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="focus-visible:ring-secondary"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenu.DropdownMenuTrigger>
            <DropdownMenu.DropdownMenuContent align="end">
                <DropdownMenu.DropdownMenuItem
                    onClick={() => setTheme("light")}
                >
                    Light
                </DropdownMenu.DropdownMenuItem>
                <DropdownMenu.DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenu.DropdownMenuItem>
                <DropdownMenu.DropdownMenuItem
                    onClick={() => setTheme("system")}
                >
                    System
                </DropdownMenu.DropdownMenuItem>
            </DropdownMenu.DropdownMenuContent>
        </DropdownMenu.DropdownMenu>
    );
};
