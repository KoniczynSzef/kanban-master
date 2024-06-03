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
            name="sortingStrategy"
            render={({ field }) => (
                <FormItem>
                    <Select onValueChange={field.onChange}>
                        <FormControl>
                            <SelectTrigger className="mr-16">
                                <SelectValue placeholder="Sort your teams" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Sort by name">
                                Sort by name
                            </SelectItem>
                            <SelectItem value="Sort by date">
                                Sort by date
                            </SelectItem>
                            <SelectItem value="Default">Default</SelectItem>
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};
