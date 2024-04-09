"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { User } from "@/database/schema";
import { isUserValidated } from "@/server/auth/get-user-by-kinde-id";

interface Props {
    user: typeof User.$inferSelect;
}

const CreateUser: FC<Props> = (props) => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        setLoading(true);

        console.log(await isUserValidated(props.user.kindeId));

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? "Creating..." : "Create user"}
        </Button>
    );
};

export default CreateUser;
