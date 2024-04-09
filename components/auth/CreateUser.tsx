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
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface Props {
    user: typeof User.$inferSelect | null | undefined;
    kindeUser: KindeUser;
}

const CreateUser: FC<Props> = (props) => {
    const form = useForm<CreateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(CreateUserSchema),
        defaultValues: createUserDefaultValues(props.user, props.kindeUser),
    });

    const handleSubmit = async (data: CreateUserSchemaType) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
                <Label htmlFor="name">Name</Label>
                <Input {...form.register("name")} />
                <Button type="submit">Create Account</Button>
            </form>
        </Form>
    );
};

export default CreateUser;
