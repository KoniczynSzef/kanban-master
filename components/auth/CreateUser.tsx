"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { users } from "@/database/schema";
import { createUser } from "@/server/auth/createUser";

interface Props {
    user: typeof users.$inferInsert;
}

const CreateUser: FC<Props> = (props) => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        setLoading(true);

        setLoading(true);
        await createUser(props.user);
        setLoading(false);
    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? "Creating..." : "Create user"}
        </Button>
    );
};

export default CreateUser;
