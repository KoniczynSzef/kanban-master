"use client";

import React, { FC } from "react";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { dashboardRoleSchema, userRoles } from "@/types/models/user-model";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectRoleField from "./SelectRoleField";
import { Button } from "../ui/button";

import { Loader } from "lucide-react";
import { toast } from "sonner";

interface Props {}

const SelectRole: FC<Props> = () => {
    const form = useForm<z.infer<typeof dashboardRoleSchema>>({
        resolver: zodResolver(dashboardRoleSchema),
        mode: "onChange",
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);

        toast.success("Role saved successfully");
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
                        <div className="grid grid-cols-2 justify-items-center items-center gap-8 text-left mt-8">
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
                    disabled={form.formState.isSubmitting}
                    onClick={() => {
                        if (!form.getValues().userRole) {
                            toast.error("Please select a role");
                        }
                    }}
                >
                    {form.formState.isSubmitting ? (
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
