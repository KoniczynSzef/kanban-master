import React, { FC } from "react";
import { Input } from "../../ui/input";
import { FormControl, FormField, FormItem } from "../../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { Label } from "../../ui/label";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

const AddTeamChatLink: FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="teamChatLink"
            render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                    <Label htmlFor="teamChatLink">Link to your team chat</Label>
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

export default AddTeamChatLink;
