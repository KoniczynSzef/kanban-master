import React, { FC } from "react";
import { Input } from "../ui/input";
import { FormControl, FormField, FormItem } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { Label } from "@radix-ui/react-label";

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
                    <Label htmlFor="teamChatLink">Team chat link</Label>
                    <FormControl>
                        <Input
                            placeholder="https://teams.microsoft.com/"
                            {...field}
                            type="url"
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default CreateFirstTeam;
