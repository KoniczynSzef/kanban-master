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
import { SortTeams } from "./SortTeams";
import Link from "next/link";
import { linkStyle } from "@/lib/link-style";
import { filterTeams } from "@/utils/dashboard/filter-teams";
import { TeamContext } from "@/context/teams/context";

interface Props {
    typedValueRef: React.MutableRefObject<string>;
}

export const Searchbar: React.FC<Props> = (props) => {
    const { initialTeams, teams, setTeams } = React.useContext(TeamContext);
    const form = useForm<SearchbarSchema>({
        defaultValues: {
            input: "",
            sortingStrategy: "Default",
        },

        mode: "onChange",
        resolver: zodResolver(searchbarSchema),
    });

    React.useEffect(() => {
        // prettier-ignore
        const { hasChanged, teams: newTeams } = filterTeams(initialTeams, form.getValues("input"), form.getValues().sortingStrategy, teams);

        if (hasChanged) {
            setTeams(newTeams);
        }

        props.typedValueRef.current = form.getValues().input;
    }, [form.getValues().input, form.getValues().sortingStrategy]);

    return (
        <>
            <Form {...form}>
                <form
                    action=""
                    className="flex items-center gap-8 justify-between"
                >
                    <SearchbarField form={form} {...props} />
                    <SortTeams form={form} />

                    <Link href="/dashboard/new-team" className={linkStyle}>
                        <Button className="self-start" tabIndex={-1}>
                            Create a team
                        </Button>
                    </Link>
                </form>
            </Form>
        </>
    );
};
