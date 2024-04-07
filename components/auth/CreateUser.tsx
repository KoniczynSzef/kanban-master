"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { users } from "@/database/schema";
import { createUser } from "@/server/auth/createUser";

interface Props {
    user: typeof users.$inferInsert;
}

const CreateUser: FC<Props> = (props) => {
    const handleClick = async () => {
        await createUser(props.user);
        console.log("User created");
    };

    return <Button onClick={handleClick}>Create User</Button>;
};

export default CreateUser;
