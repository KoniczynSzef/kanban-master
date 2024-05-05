"use client";

import React, { FC } from "react";
import { FormField } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { User, userRoles } from "@/types/models/user-model";
import SelectRoleField from "./SelectRoleField";

import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

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
    form: UseFormReturn<CreateTeamSchema>;
}

const SelectRole: FC<Props> = (props) => {
    return (
        <>
            <h4 className="text-xl font-semibold">
                Select your role in the team{" "}
                <span className="text-red-500">*</span>
            </h4>

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
        </>
    );
};

export default SelectRole;
