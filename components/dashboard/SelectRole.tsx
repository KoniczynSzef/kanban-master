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
import { useRouter } from "next/navigation";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";

interface Props {
    user: User;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<
        QueryObserverResult<{
            user: User[];
        } | null>
    >;

    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectRole: FC<Props> = (props) => {
    const router = useRouter();

    const { mutate, isLoading } = trpc.addRoleToUser.useMutation({
        onSettled: () => {
            toast.success("Role saved successfully");
            router.push("/dashboard");
            props.setStep(1);
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
                className="flex flex-col gap-8"
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
