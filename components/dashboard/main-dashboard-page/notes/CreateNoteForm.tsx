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

interface Props {}

export const CreateNoteForm: React.FC<Props> = () => {
    const form = useForm<CreateNoteSchema>({
        defaultValues: {
            title: "",
            content: "",
        },
        mode: "onChange",
        resolver: zodResolver(createNoteSchema),
    });

    return (
        <Form.Form {...form}>
            <form action="">
                <CreateNoteField form={form} name="title" label="Title" />
                <CreateNoteField form={form} name="content" label="Content" />

                <Button type="submit">Create Note</Button>
            </form>
        </Form.Form>
    );
};
