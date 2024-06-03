import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TeamContext } from "@/context/context";
import {
    SearchbarSchema,
    SortingStrategy,
} from "@/types/schemas/searchbar-schema";
import { filterTeams } from "@/utils/dashboard/filter-teams";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
}

export const SortTeams: React.FC<Props> = (props) => {
    const { setTeams, initialTeams, teams } = React.useContext(TeamContext);

    const handleChange = (value: SortingStrategy) => {
        const query = props.form.getValues();
        console.log(query);

        // prettier-ignore
        const { hasChanged, teams: newTeams } = filterTeams(initialTeams, props.form.getValues("input"), value, teams);

        if (hasChanged) {
            setTeams(newTeams);
        }
    };

    return (
        <FormField
            control={props.form.control}
            name="sortingStrategy"
            render={() => (
                <FormItem>
                    <Select
                        onValueChange={handleChange}
                        defaultValue={"Default"}
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
                            <SelectItem value="Default">Default</SelectItem>
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};
