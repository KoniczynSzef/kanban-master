"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { User } from "@/database/schema";
import { useForm } from "react-hook-form";
import {
    CreateUserSchema,
    CreateUserSchemaType,
    createUserDefaultValues,
    userProps,
} from "@/types/schemas/create-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "../ui/form";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import CreateFormField from "./CreateFormField";

import { useAction } from "next-safe-action/hooks";
import { validateUser } from "@/server/auth/validate-user";
import { redirect } from "next/navigation";

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

    const { execute, status } = useAction(validateUser, {
        onSuccess: (data) => {
            console.log("User created");
            console.log(data);
            return redirect("/");
        },
    });

    const handleSubmit = async () => {
        execute(props.kindeUser.id);
    };

    return (
        <Form.Form {...form}>
            <form
                action=""
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-xl border border-primary-foreground p-8 rounded-xl flex flex-col gap-4 mx-auto"
            >
                {userProps.map((prop, idx) => (
                    <CreateFormField key={idx} prop={prop} form={form} />
                ))}

                <Button type="submit" disabled={status === "executing"}>
                    Create Account
                </Button>
            </form>
        </Form.Form>
    );
};

export default CreateUser;
