import { Button } from "@/components/ui/button";
import * as Form from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
    CreateNoteSchema,
    createNoteSchema,
} from "@/types/schemas/note/create-note-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
    content: string;
}

export const EditNote: React.FC<Props> = (props) => {
    const form = useForm<CreateNoteSchema>({
        defaultValues: {
            content: props.content,
        },

        mode: "onChange",
        resolver: zodResolver(createNoteSchema),
    });

    return (
        <Form.Form {...form}>
            <form action="" className="flex flex-col gap-4">
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

                <Button type="submit">Save</Button>
            </form>
        </Form.Form>
    );
};
