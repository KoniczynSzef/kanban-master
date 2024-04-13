"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { users } from "@/database/schema";
import { useForm } from "react-hook-form";
import {
    CreateUserSchema,
    CreateUserSchemaType,
    createUserDefaultValues,
} from "@/types/schemas/create-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "../ui/form";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import CreateFormField from "./CreateFormField";

import { inputFormFields } from "@/types/schemas/form-field";
import { toast } from "sonner";

interface Props {
    user: typeof users.$inferSelect | null | undefined;
    kindeUser: KindeUser;
}

const CreateUser: FC<Props> = (props) => {
    const form = useForm<CreateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(CreateUserSchema),
        defaultValues: createUserDefaultValues(props.user, props.kindeUser),
    });

    const handleSubmit = async (data: CreateUserSchemaType) => {
        console.log("data", data);
        toast.success("Account created successfully");
    };

    return (
        <Form.Form {...form}>
            <form
                action=""
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-xl border border-primary-foreground p-8 rounded-xl flex flex-col gap-4 mx-auto"
            >
                {inputFormFields.map((inputProps, idx) => (
                    <CreateFormField
                        key={idx}
                        inputProps={inputProps}
                        form={form}
                    />
                ))}

                <Button type="submit">Create account</Button>
            </form>
        </Form.Form>
    );
};

export default CreateUser;
