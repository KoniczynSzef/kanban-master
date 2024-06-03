import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { TeamContext } from "@/context/context";
import { filterTeams } from "@/utils/dashboard/filter-teams";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
    typedValueRef: React.MutableRefObject<string>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    const { setTeams, initialTeams, teams } = React.useContext(TeamContext);

    React.useEffect(() => {
        const query = props.form.getValues().input;
        props.typedValueRef.current = query;

        // prettier-ignore
        const { hasChanged, teams: newTeams } = filterTeams(initialTeams, query, props.form.getValues().sortingStrategy, teams);

        if (hasChanged) {
            setTeams(newTeams);
        }
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
