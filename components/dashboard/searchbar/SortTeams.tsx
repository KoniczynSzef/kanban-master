import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SortTeams: React.FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="sortByActivity"
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={"Sorting"}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Sort your teams" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Sort by name">
                                Sort by name
                            </SelectItem>
                            <SelectItem value="Sort by activity">
                                Sort by activity
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};
