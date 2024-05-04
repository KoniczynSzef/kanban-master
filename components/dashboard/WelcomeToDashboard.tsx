import { User } from "@/types/models/user-model";
import React, { FC } from "react";
import SelectRole from "./SelectRole";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";

interface Props {
    user: User;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<
        QueryObserverResult<{
            user: User[];
        } | null>
    >;
}

const WelcomeToDashboard: FC<Props> = (props) => {
    return (
        <section className="text-center">
            <h1 className="text-3xl font-semibold text-primary">
                Welcome to the dashboard, {props.user.name}
            </h1>
            <p className="text-muted-foreground mt-2">
                Tell us more about yourself by adding your common role
            </p>

            <SelectRole user={props.user} refetch={props.refetch} />
        </section>
    );
};

export default WelcomeToDashboard;
