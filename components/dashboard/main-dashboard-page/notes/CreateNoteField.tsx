import * as Form from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { CreateNoteSchema } from "@/types/schemas/note/create-note-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<CreateNoteSchema>;
    name: keyof CreateNoteSchema;
    label: string;
}

export const CreateNoteField: React.FC<Props> = (props) => {
    return (
        <Form.FormField
            control={props.form.control}
            name={props.name}
            render={({ field }) => (
                <Form.FormItem>
                    <Form.FormLabel className="mx-auto sr-only">
                        {props.label}
                    </Form.FormLabel>
                    <Form.FormControl>
                        <Textarea
                            cols={30}
                            rows={3}
                            {...field}
                            placeholder={`${props.label}...`}
                        />
                    </Form.FormControl>
                    <Form.FormMessage />
                </Form.FormItem>
            )}
        />
    );
};
