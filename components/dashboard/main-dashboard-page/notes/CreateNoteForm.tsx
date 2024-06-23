"use client";

import * as Form from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    CreateNoteSchema,
    createNoteSchema,
} from "@/types/schemas/note/create-note-schema";
import { CreateNoteField } from "./CreateNoteField";
import { trpc } from "@/server/trpc";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { User } from "@/types/models/user-model";
import { ModalContext } from "@/context/modal/modal-context";

interface Props {
    user: User;
    refetchNotes: () => Promise<void>;
}

export const CreateNoteForm: React.FC<Props> = (props) => {
    const { toggleOpen } = React.useContext(ModalContext);

    const { mutate: createNote, isLoading } = trpc.createNote.useMutation({
        onSettled: async () => {
            toast.success("Note created successfully!");
            await props.refetchNotes();
            toggleOpen(false);
        },
    });

    const form = useForm<CreateNoteSchema>({
        defaultValues: {
            content: "",
        },

        mode: "onChange",
        resolver: zodResolver(createNoteSchema),
    });

    async function handleSubmit(data: CreateNoteSchema) {
        createNote({
            userId: props.user.id,
            ...data,
        });
    }

    return (
        <Form.Form {...form}>
            <form
                action=""
                className="flex flex-col gap-8"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <CreateNoteField form={form} name="content" label="Content" />

                <Button type="submit" className="mt-4" disabled={isLoading}>
                    {isLoading ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Create Note"
                    )}
                </Button>
            </form>
        </Form.Form>
    );
};
