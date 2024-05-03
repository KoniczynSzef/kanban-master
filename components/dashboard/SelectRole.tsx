"use client";

import React, { FC } from "react";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    User,
    dashboardRoleSchema,
    userRoles,
} from "@/types/models/user-model";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectRoleField from "./SelectRoleField";
import { Button } from "../ui/button";

import { Loader } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/server/trpc";
import { revalidatePath } from "next/cache";

interface Props {
    user: User;
}

const SelectRole: FC<Props> = (props) => {
    const { mutate, isLoading } = trpc.addRoleToUser.useMutation({
        onSettled: () => {
            toast.success("Role saved successfully");
            revalidatePath("/dashboard");
        },
    });

    const form = useForm<z.infer<typeof dashboardRoleSchema>>({
        resolver: zodResolver(dashboardRoleSchema),
        mode: "onChange",
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        mutate({
            kindeId: props.user.kindeId,
            role: data.userRole,
        });
    });

    return (
        <Form {...form}>
            <form
                action=""
                className="border border-muted rounded-2xl p-8 mt-16 max-w-3xl mx-auto flex flex-col gap-8"
                onSubmit={handleSubmit}
            >
                <h4 className="text-xl font-semibold">
                    Select your role in the team{" "}
                    <span className="text-red-500">*</span>
                </h4>

                <FormField
                    control={form.control}
                    name="userRole"
                    render={() => (
                        <div className="grid grid-cols-2 justify-items-center items-center gap-8 text-left mt-4">
                            {userRoles.map((role) => (
                                <SelectRoleField
                                    key={role}
                                    form={form}
                                    role={role}
                                />
                            ))}
                        </div>
                    )}
                />

                <Button
                    className="self-center w-32"
                    disabled={isLoading}
                    onClick={() => {
                        if (!form.getValues().userRole) {
                            toast.error("Please select a role");
                        }
                    }}
                >
                    {isLoading ? (
                        <Loader className="animate-spin" />
                    ) : (
                        "Save Role"
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default SelectRole;
