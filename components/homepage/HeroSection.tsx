import React, { FC } from "react";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="text-center flex flex-col items-center gap-4">
            <h1 className="text-4xl font-medium">Manage your workflow</h1>
            <h2 className="text-3xl font-medium text-primary">
                Organize everything in few clicks
            </h2>

            <article className="mt-8 text-center flex flex-col items-center gap-1">
                <p>KanMaster is a workflow management tool.</p>
                <p>
                    Based on the Kanban system, it allows you to manage your
                    teams, projects and tasks.
                </p>
                <p>
                    Benefit from the flexibility of the tool to adapt it to your
                    own needs.
                </p>
            </article>
        </div>
    );
};

export default HeroSection;
