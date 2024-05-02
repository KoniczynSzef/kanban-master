import { User } from "@/types/models/user-model";
import React, { FC } from "react";

interface Props {
    user: User;
}

const WelcomeToDashboard: FC<Props> = (props) => {
    return (
        <section>
            <h1 className="text-2xl font-semibold">
                Welcome to the dashboard, {props.user.name}
            </h1>
            <p className="text-lg">Get started by creating a team</p>
        </section>
    );
};

export default WelcomeToDashboard;
