import * as Form from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateNoteSchema } from "@/server/routes/notes/create-note";
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
                    <Form.FormLabel>{props.label}</Form.FormLabel>
                    <Form.FormControl>
                        <Input
                            {...field}
                            placeholder={`${props.label}...`}
                            value={field.value as string}
                        />
                    </Form.FormControl>
                    <Form.FormMessage />
                </Form.FormItem>
            )}
        />
    );
};
