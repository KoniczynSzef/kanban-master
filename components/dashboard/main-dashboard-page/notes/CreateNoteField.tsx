import * as Form from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
                    <div className="flex items-center gap-3">
                        <Form.FormLabel className="mx-auto">
                            {props.label}
                        </Form.FormLabel>
                        <Form.FormControl>
                            {props.name === "content" ? (
                                <Textarea
                                    cols={30}
                                    rows={3}
                                    {...field}
                                    placeholder={`${props.label}...`}
                                    value={field.value as string}
                                    className="w-[75%] ml-auto"
                                />
                            ) : (
                                <Input
                                    {...field}
                                    placeholder={`${props.label}...`}
                                    value={field.value as string}
                                    className="w-[75%] ml-auto"
                                />
                            )}
                        </Form.FormControl>
                    </div>
                    <Form.FormMessage />
                </Form.FormItem>
            )}
        />
    );
};
