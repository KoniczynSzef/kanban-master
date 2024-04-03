import { Button } from "@/components/ui/button";
import { db } from "@/database";
import { projects } from "@/database/schema";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async (props) => {
    const newProjects = await db.query.projects.findMany();

    return (
        <div className="p-24">
            <p className="text-3xl">Test</p>
            {newProjects.map((project) => (
                <p key={project.id}>{JSON.stringify(project, null, 2)}</p>
            ))}

            <Button>Hello World</Button>
        </div>
    );
};

export default page;
