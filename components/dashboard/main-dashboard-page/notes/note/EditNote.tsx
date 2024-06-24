import { Button } from "@/components/ui/button";
import * as Form from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ModeContext } from "@/context/notes/mode-context";
import { trpc } from "@/server/trpc";
import { Note } from "@/types/models/note-model";
import {
    CreateNoteSchema,
    createNoteSchema,
} from "@/types/schemas/note/create-note-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
    note: Note;
    refetchNotes: () => Promise<void>;
}

export const EditNote: React.FC<Props> = (props) => {
    const { setMode } = React.useContext(ModeContext);
    const form = useForm<CreateNoteSchema>({
        defaultValues: {
            content: props.note.content,
        },

        mode: "onChange",
        resolver: zodResolver(createNoteSchema),
    });

    const { mutate, isLoading } = trpc.updateNote.useMutation({
        onSuccess: async () => {
            await props.refetchNotes();
            setMode("View");
            toast.success("Note updated successfully");
        },

        onError: () => {
            toast.error("Failed to update note");
        },
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        mutate({
            id: props.note.id,
            content: data.content,
        });
    });

    return (
        <Form.Form {...form}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Form.FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel htmlFor="content">
                                Your note content
                            </Form.FormLabel>
                            <Textarea cols={5} rows={5} {...field} />
                        </Form.FormItem>
                    )}
                />

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Loader className="animate-spin" /> : "Save"}
                </Button>
            </form>
        </Form.Form>
    );
};
