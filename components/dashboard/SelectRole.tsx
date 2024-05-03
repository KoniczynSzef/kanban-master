"use client";

import React, { FC } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { dashboardRoleSchema, userRoles } from "@/types/models/user-model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";

interface Props {}

const SelectRole: FC<Props> = () => {
    const form = useForm<z.infer<typeof dashboardRoleSchema>>({
        resolver: zodResolver(dashboardRoleSchema),
        mode: "onChange",
    });

    return (
        <Form {...form}>
            <form action="" className="border border-muted rounded-2xl">
                <FormField
                    control={form.control}
                    name="userRole"
                    render={() => (
                        <FormItem className="grid grid-cols-2 place-items-center">
                            <FormLabel />
                            {userRoles.map((role) => (
                                <FormControl key={role}>
                                    <Checkbox />
                                </FormControl>
                            ))}
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default SelectRole;
