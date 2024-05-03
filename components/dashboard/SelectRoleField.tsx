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
            variant={form.getValues().userRole === role ? "default" : "outline"}
            type="button"
            className="w-48"
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
