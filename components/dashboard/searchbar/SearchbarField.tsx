import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { TeamContext } from "@/context/team-context";
import { filterTeams } from "@/utils/dashboard/filter-teams";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    const { setTeams, initialTeams } = React.useContext(TeamContext);

    const [inputValue, setInputValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;

        // prettier-ignore
        setTeams(filterTeams(initialTeams, query, props.form.getValues().sortByName === "Sort by name"));

        setInputValue(query);
    };

    return (
        <FormField
            control={props.form.control}
            name="input"
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                        <Input
                            {...field}
                            value={inputValue}
                            placeholder="Search teams..."
                            className="w-full"
                            onChange={handleChange}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
