import { trpc } from "@/server/trpc";
import { Note } from "@/types/models/note-model";
import React from "react";
import { toast } from "sonner";
import { Loader, Trash } from "lucide-react";
import * as DropdownMenu from "@/components/ui/dropdown-menu";

interface Props {
    note: Note;
    refetchNotes: () => Promise<void>;
}

export const DismissNote: React.FC<Props> = (props) => {
    const { mutate, isLoading } = trpc.deleteNote.useMutation({
        onSuccess: async () => {
            await props.refetchNotes();
            toast.success("Note dismissed successfully");
        },

        onError: () => {
            toast.error("Failed to dismiss note");
        },
    });

    function dismissNote() {
        mutate(props.note.id);
    }

    return (
        <DropdownMenu.DropdownMenuItem onClick={dismissNote}>
            <>
                <Trash className="mr-2 size-4 text-destructive" />
                <span>
                    {isLoading ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Dismiss"
                    )}
                </span>
            </>
        </DropdownMenu.DropdownMenuItem>
    );
};
