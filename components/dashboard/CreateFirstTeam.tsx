import React, { FC } from "react";
import { Input } from "../ui/input";

interface Props {}

const CreateFirstTeam: FC<Props> = () => {
    return (
        <div>
            <p>Create your first team to get started with your projects</p>
            <Input placeholder="Enter team name" />
        </div>
    );
};

export default CreateFirstTeam;
