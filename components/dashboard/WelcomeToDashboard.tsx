import { User } from "@/types/models/user-model";
import React, { FC } from "react";
import SelectRole from "./SelectRole";

interface Props {
    user: User;
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

            <SelectRole user={props.user} />
        </section>
    );
};

export default WelcomeToDashboard;
