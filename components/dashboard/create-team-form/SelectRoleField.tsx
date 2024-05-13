import React, { FC } from "react";
import { Button } from "../../ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRole } from "@/types/models/user-model";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
    role: UserRole;
}

const SelectRoleField: FC<Props> = (props) => {
    const { form, role } = props;

    return (
        <Button
            type="button"
            variant={
                form.getValues().teamRole === role ? "secondary" : "outline"
            }
            className={`w-48 py-6`}
            key={role}
            onClick={() => {
                form.setValue("teamRole", role);
            }}
            disabled={form.getValues().teamRole === role}
        >
            {role}
        </Button>
    );
};

export default SelectRoleField;
