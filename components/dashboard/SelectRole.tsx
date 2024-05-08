"use client";

import React, { FC } from "react";
import { FormField } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { userRoles } from "@/types/models/user-model";
import SelectRoleField from "./SelectRoleField";

import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

const SelectRole: FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="teamRole"
            render={() => (
                <div className="grid grid-cols-2 justify-items-center items-center gap-8 text-left mt-4">
                    {userRoles.map((role) => (
                        <SelectRoleField
                            key={role}
                            form={props.form}
                            role={role}
                        />
                    ))}
                </div>
            )}
        />
    );
};

export default SelectRole;
