import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { TeamContext, SearchContext } from "@/context/context";
import { filterTeams } from "@/utils/dashboard/filter-teams";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    const { setTeams, initialTeams } = React.useContext(TeamContext);
    const { setTypedValue } = React.useContext(SearchContext);

    React.useEffect(() => {
        const query = props.form.getValues().input;
        setTypedValue(query);

        // prettier-ignore
        setTeams(filterTeams(initialTeams, query, props.form.getValues().sortByName === "Sort by name"));
    }, [props.form.getValues().input]);

    return (
        <FormField
            control={props.form.control}
            name="input"
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                        <Input
                            {...field}
                            placeholder="Search teams..."
                            className="w-full"
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
