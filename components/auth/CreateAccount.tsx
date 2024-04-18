"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
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
import { User } from "@/types/models/User";
import { trpc } from "@/server/trpc";
import { useRouter } from "next/navigation";

import { Loader } from "lucide-react";

interface Props {
    user: User | null | undefined;
    kindeUser: KindeUser;
}

const CreateUser: FC<Props> = (props) => {
    const router = useRouter();
    const form = useForm<CreateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(CreateUserSchema),
        defaultValues: createUserDefaultValues(props.user, props.kindeUser),
    });

    const { mutate: validateAccount, isLoading } =
        trpc.validateAccount.useMutation({
            onSuccess: () => {
                toast.success("Account validated");
                router.push("/");
            },
        });

    const handleSubmit = async (data: CreateUserSchemaType) => {
        validateAccount({
            kindeId: props.kindeUser.id,
            data,
        });
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

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Create Account"
                    )}
                </Button>
            </form>
        </Form.Form>
    );
};

export default CreateUser;
