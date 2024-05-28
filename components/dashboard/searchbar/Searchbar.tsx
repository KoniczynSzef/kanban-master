import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Team } from "@/types/models/team-model";
import {
    SearchbarSchema,
    searchbarSchema,
} from "@/types/schemas/searchbar-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { SearchbarField } from "./SearchbarField";

interface Props {
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}

export const Searchbar: React.FC<Props> = (props) => {
    const form = useForm<SearchbarSchema>({
        defaultValues: {
            input: "",
            sortByActivity: false,
        },

        mode: "onChange",
        resolver: zodResolver(searchbarSchema),
    });

    const resetTeams = () => {
        props.setTeams([]);
    };

    return (
        <>
            <Form {...form}>
                <form action="">
                    <SearchbarField form={form} {...props} />
                </form>
            </Form>
            <div>
                <Button onClick={resetTeams}>Reset teams</Button>
            </div>
        </>
    );
};
