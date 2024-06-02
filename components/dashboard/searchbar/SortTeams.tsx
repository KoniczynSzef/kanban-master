import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TeamContext } from "@/context/context";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import { filterTeams } from "@/utils/dashboard/filter-teams";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SortTeams: React.FC<Props> = (props) => {
    const { setTeams, initialTeams } = React.useContext(TeamContext);

    const handleChange = (value: string) => {
        const query = props.form.getValues();
        console.log(query);

        // prettier-ignore
        setTeams(filterTeams(initialTeams, props.form.getValues("input"), value === "Sort by name"));
    };

    return (
        <FormField
            control={props.form.control}
            name="sortByName"
            render={() => (
                <FormItem>
                    <Select
                        onValueChange={handleChange}
                        defaultValue={"Sort by name"}
                    >
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
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};
