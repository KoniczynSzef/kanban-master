import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
    SearchbarSchema,
    searchbarSchema,
} from "@/types/schemas/searchbar-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { SearchbarField } from "./SearchbarField";
import { TeamContext } from "@/context/team-context";
import { SortTeams } from "./SortTeams";

interface Props {}

export const Searchbar: React.FC<Props> = () => {
    const { setTeams, initialTeams } = React.useContext(TeamContext);
    const form = useForm<SearchbarSchema>({
        defaultValues: {
            input: "",
            sortByActivity: false,
        },

        mode: "onChange",
        resolver: zodResolver(searchbarSchema),
    });

    const resetTeams = () => {
        setTeams(initialTeams);
    };

    return (
        <>
            <Form {...form}>
                <form
                    action=""
                    className="flex items-center gap-8 justify-between"
                >
                    <SearchbarField form={form} />
                    <SortTeams form={form} />
                </form>
            </Form>
            <div>
                <Button onClick={resetTeams}>Reset teams</Button>
            </div>
        </>
    );
};
