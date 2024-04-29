import React, { FC } from "react";

interface Props {}

const paragraphs = [
    "KanMaster is a workflow management tool.",
    "Based on the Kanban system, it allows you to manage your teams, projects and tasks.",
    "Benefit from the flexibility of the tool to adapt it to your own needs.",
];

const AnimatedDescription: FC<Props> = () => {
    return (
        <article className="mt-8 text-center flex flex-col items-center gap-1">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                    {paragraph}
                </p>
            ))}
        </article>
    );
};

export default AnimatedDescription;
