"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";

interface Props {}

const CreateUser: FC<Props> = () => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        setLoading(true);

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
