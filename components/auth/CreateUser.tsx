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
import * as Form from "../ui/form";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import CreateFormField from "./CreateFormField";

import { useAction } from "next-safe-action/hooks";
import { validateUser } from "@/server/auth/validate-user";

import { Loader } from "lucide-react";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
import { inputFormFields } from "@/types/schemas/form-field";
import { createUser } from "@/server/auth/create-user";

interface Props {
    user: typeof User.$inferSelect | null | undefined;
    kindeUser: KindeUser;
}

const CreateUser: FC<Props> = (props) => {
    const router = useRouter();
    const form = useForm<CreateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(CreateUserSchema),
        defaultValues: createUserDefaultValues(props.user, props.kindeUser),
    });

    // const { execute, status } = useAction(validateUser, {
    //     onSuccess: async (data) => {
    //         if (data.success) {
    //             const createdUser = await createUser({
    //                 kindeId: props.kindeUser.id,
    //                 user: form.getValues(),
    //             });
    //             if (createdUser) {
    //                 toast.success("Account created successfully");
    //                 redirect("/");
    //             }
    //         }
    //     },
    // });

    const handleSubmit = async () => {
        const res = await fetch("/api/auth/create-account", { method: "POST" });
        if (res.ok) {
            toast.success("Account created successfully");
            router.push("/");
        }
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

                {/* <Button type="submit" disabled={status === "executing"}>
                    {status === "executing" ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Create account"
                    )}
                </Button> */}
                <Button type="submit">Create account</Button>
            </form>
        </Form.Form>
    );
};

export default CreateUser;
