import { db } from "@/database";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async (props) => {
    const projects = await db.query.projects.findMany();

    return (
        <div className="p-24">
            <p className="text-3xl">Test</p>
            {projects.map((project) => (
                <p key={project.id}>{JSON.stringify(project, null, 2)}</p>
            ))}
        </div>
    );
};

export default page;
