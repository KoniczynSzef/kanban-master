import React, { FC } from "react";
import { FormControl, FormField, FormItem } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

const DescribeYourTeam: FC<Props> = (props) => {
    return (
        <>
            <FormField
                control={props.form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                        <Label htmlFor="name">Name</Label>
                        <FormControl>
                            <Input
                                placeholder="Name for your team eg. Vercel Frontend"
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={props.form.control}
                name="description"
                render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                        <Label htmlFor="description">Description</Label>
                        <FormControl>
                            <Textarea
                                placeholder="Vercel Frontend is a team of frontend developers working on the Vercel website."
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    );
};

export default DescribeYourTeam;
