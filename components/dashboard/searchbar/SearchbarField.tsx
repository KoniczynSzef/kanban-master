import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { queryTeams } from "@/server/routes/teams/query-teams";
import { TeamContext } from "@/context/team-context";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    const { setTeams, initialTeams } = React.useContext(TeamContext);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current?.value.length === 0 || !inputRef.current?.value) {
            setTeams(initialTeams);
            return;
        }

        const teams = queryTeams(initialTeams, inputRef.current?.value);
        console.log(teams);

        setTeams(teams);
    }, [inputRef.current?.value]);

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
