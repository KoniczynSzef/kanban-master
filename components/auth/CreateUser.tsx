"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { User } from "@/database/schema";
import { useForm } from "react-hook-form";
import {
    CreateUserSchema,
    CreateUserSchemaType,
    createUserDefaultValues,
} from "@/types/schemas/create-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
    user: typeof User.$inferSelect | null;
}

const CreateUser: FC<Props> = (props) => {
    const form = useForm<CreateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(CreateUserSchema),
        defaultValues: Object.assign({}, props.user, createUserDefaultValues),
    });

    return (
        <Form {...form}>
            <Label htmlFor="name">Name</Label>
            <Input {...form.register("name")} />
            <Button type="submit">Create Account</Button>
        </Form>
    );
};

export default CreateUser;
