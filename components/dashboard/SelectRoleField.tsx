import React, { FC } from "react";
import { Button } from "../ui/button";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { UserRole, dashboardRoleSchema } from "@/types/models/user-model";

interface Props {
    form: UseFormReturn<z.infer<typeof dashboardRoleSchema>>;
    role: UserRole;
}

const SelectRoleField: FC<Props> = (props) => {
    const { form, role } = props;

    return (
        <Button
            type="button"
            variant={
                form.getValues().userRole === role ? "secondary" : "outline"
            }
            className={`w-48 py-6`}
            key={role}
            onClick={() => {
                form.setValue("userRole", role);
            }}
            disabled={form.getValues().userRole === role}
        >
            {role}
        </Button>
    );
};

export default SelectRoleField;
