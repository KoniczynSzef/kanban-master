import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { Mode, ModeContext } from "@/context/notes/mode-context";
import { Note } from "@/types/models/note-model";
import { Edit, Eye, Menu } from "lucide-react";
import React from "react";
import { DismissNote } from "./DismissNote";

interface Props {
    note: Note;
    refetchNotes: () => Promise<void>;
}

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

export const NoteMenu: React.FC<Props> = (props) => {
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
                    <DismissNote
                        note={props.note}
                        refetchNotes={props.refetchNotes}
                    />
                </DropdownMenu.DropdownMenuGroup>
            </DropdownMenu.DropdownMenuContent>
        </DropdownMenu.DropdownMenu>
    );
};
