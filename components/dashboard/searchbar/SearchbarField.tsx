import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchbarSchema } from "@/types/schemas/searchbar-schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Loader, Search } from "lucide-react";
import { queryTeams } from "@/server/routes/teams/query-teams";
import { Team } from "@/types/models/team-model";

interface Props {
    form: UseFormReturn<SearchbarSchema>;
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}

export const SearchbarField: React.FC<Props> = (props) => {
    const [isTyping, setIsTyping] = React.useState(false);
    const [input, setInput] = React.useState("");

    React.useEffect(() => {
        if (input.length !== 0) {
            const teams = queryTeams(props.teams, input);
            props.setTeams(teams);
        }
    }, [input]);

    return (
        <FormField
            control={props.form.control}
            name="input"
            render={({ field }) => (
                <FormItem className="relative">
                    <div className="absolute z-40 ml-4 mt-2 text-muted-foreground">
                        {isTyping ? (
                            <Loader className="animate-spin" />
                        ) : (
                            <Search />
                        )}
                    </div>
                    <FormControl className="relative">
                        <Input
                            {...field}
                            value={input}
                            placeholder="Search teams..."
                            className="px-16"
                            onChange={(e) => {
                                setInput(e.target.value);
                                setIsTyping(true);
                                setTimeout(() => {
                                    setIsTyping(false);
                                }, 1000);
                            }}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
