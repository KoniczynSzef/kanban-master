import React, { FC } from "react";
import { Input } from "../ui/input";
import { FormControl, FormField, FormItem } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

const CreateFirstTeam: FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="teamChatLink"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input placeholder="Team chat link" {...field} />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default CreateFirstTeam;
