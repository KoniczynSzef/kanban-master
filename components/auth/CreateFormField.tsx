import React, { FC } from "react";
import * as Form from "@/components/ui/form";
import { CreateUserSchemaType } from "@/types/schemas/create-user.schema";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { InputFormFieldProps } from "@/types/schemas/form-field";
import { Textarea } from "../ui/textarea";

type FieldType = "input" | "select" | "textarea";

interface Props {
    form: UseFormReturn<CreateUserSchemaType>;
    inputProps: InputFormFieldProps;
    fieldType: FieldType;
}

const CreateFormField: FC<Props> = (props) => {
    return (
        <Form.FormField
            control={props.form.control}
            name={props.inputProps.prop}
            render={({ field }) => (
                <Form.FormItem>
                    <Form.FormLabel htmlFor={props.inputProps.prop}>
                        {props.inputProps.label.slice(0, 1).toUpperCase() +
                            props.inputProps.label.slice(1)}
                    </Form.FormLabel>
                    <Form.FormControl>
                        {props.fieldType === "textarea" ? (
                            <Textarea
                                {...field}
                                placeholder={props.inputProps.description}
                            />
                        ) : (
                            <Input
                                {...field}
                                placeholder={props.inputProps.description}
                            />
                        )}
                    </Form.FormControl>
                    <Form.FormMessage />
                </Form.FormItem>
            )}
        />
    );
};

export default CreateFormField;
