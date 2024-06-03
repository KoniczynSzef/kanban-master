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

interface Props {}

export const Searchbar: React.FC<Props> = () => {
    const form = useForm<SearchbarSchema>({
        defaultValues: {
            input: "",
            sortingStrategy: "Default",
        },

        mode: "onChange",
        resolver: zodResolver(searchbarSchema),
    });

    return (
        <>
            <Form {...form}>
                <form
                    action=""
                    className="flex items-center gap-8 justify-between"
                >
                    <SearchbarField form={form} />
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
