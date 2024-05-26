import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="input"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input {...field} placeholder="Search teams..." />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
