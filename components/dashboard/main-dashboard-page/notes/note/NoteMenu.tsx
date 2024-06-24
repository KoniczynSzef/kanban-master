import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { Mode, ModeContext } from "@/context/notes/mode-context";
import { Edit, Eye, Menu, Trash } from "lucide-react";
import React from "react";

interface Props {}

function ModeInfo(props: { handleChooseMode(mode: Mode): void }) {
    const { mode } = React.useContext(ModeContext);

    const isEdit = mode === "Edit";

    return (
        <DropdownMenu.DropdownMenuItem
            onClick={() => props.handleChooseMode(isEdit ? "View" : "Edit")}
        >
            {!isEdit ? (
                <>
                    <Edit className="mr-2 size-4" />
                    <span>Edit</span>
                </>
            ) : (
                <>
                    <Eye className="mr-2 size-4" />
                    <span>View</span>
                </>
            )}
        </DropdownMenu.DropdownMenuItem>
    );
}

export const NoteMenu: React.FC<Props> = () => {
    const { setMode } = React.useContext(ModeContext);

    function handleChooseMode(mode: Mode) {
        setMode(mode);
    }

    return (
        <DropdownMenu.DropdownMenu>
            <DropdownMenu.DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                    <Menu />
                </Button>
            </DropdownMenu.DropdownMenuTrigger>

            <DropdownMenu.DropdownMenuContent>
                <DropdownMenu.DropdownMenuGroup>
                    <ModeInfo handleChooseMode={handleChooseMode} />
                    <DropdownMenu.DropdownMenuItem>
                        <Trash className="mr-2 size-4 text-destructive" />
                        <span>Dismiss</span>
                    </DropdownMenu.DropdownMenuItem>
                </DropdownMenu.DropdownMenuGroup>
            </DropdownMenu.DropdownMenuContent>
        </DropdownMenu.DropdownMenu>
    );
};
