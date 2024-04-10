import React, { FC } from "react";
import * as Form from "@/components/ui/form";
import { CreateUserSchemaType } from "@/types/schemas/create-user.schema";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";

interface Props {
    form: UseFormReturn<CreateUserSchemaType>;
    prop: keyof CreateUserSchemaType;
}

const CreateFormField: FC<Props> = (props) => {
    return (
        <Form.FormField
            control={props.form.control}
            name={props.prop}
            render={({ field }) => (
                <Form.FormItem>
                    <Form.FormLabel htmlFor={props.prop}>
                        {props.prop.slice(0, 1).toUpperCase() +
                            props.prop.slice(1)}
                    </Form.FormLabel>
                    <Form.FormControl>
                        <Input {...field} />
                    </Form.FormControl>
                    <Form.FormMessage />
                </Form.FormItem>
            )}
        />
    );
};

export default CreateFormField;
