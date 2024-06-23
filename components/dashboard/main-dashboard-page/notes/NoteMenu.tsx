import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { Edit, Menu, Trash } from "lucide-react";
import React from "react";

interface Props {}

export const NoteMenu: React.FC<Props> = () => {
    return (
        <DropdownMenu.DropdownMenu>
            <DropdownMenu.DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                    <Menu />
                </Button>
            </DropdownMenu.DropdownMenuTrigger>

            <DropdownMenu.DropdownMenuContent>
                <DropdownMenu.DropdownMenuGroup>
                    <DropdownMenu.DropdownMenuItem>
                        <Edit className="mr-2 size-4" />
                        <span>Edit</span>
                    </DropdownMenu.DropdownMenuItem>
                    <DropdownMenu.DropdownMenuItem>
                        <Trash className="mr-2 size-4 text-destructive" />
                        <span>Dismiss</span>
                    </DropdownMenu.DropdownMenuItem>
                </DropdownMenu.DropdownMenuGroup>
            </DropdownMenu.DropdownMenuContent>
        </DropdownMenu.DropdownMenu>
    );
};
