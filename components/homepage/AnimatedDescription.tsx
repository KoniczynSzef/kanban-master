"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";

interface Props {}

const paragraphs = [
    "KanMaster is a workflow management tool.",
    "Based on the Kanban system, it allows you to manage your teams, projects and tasks.",
    "Benefit from the flexibility of the tool to adapt it to your own needs.",
];

const AnimatedDescription: FC<Props> = () => {
    return (
        <motion.article
            className="mt-8 text-center flex flex-col items-center gap-1"
            transition={{ delay: 0.25 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            layout
        >
            {paragraphs.map((paragraph, index) => (
                <div className="relative" key={index}>
                    <p className="text-muted-foreground">{paragraph}</p>

                    <motion.div
                        className="absolute left-0 top-0 bottom-0 right-0 bg-primary rounded"
                        initial={{ left: 0 }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 0.75, delay: 0.25 * index }}
                    />
                </div>
            ))}
        </motion.article>
    );
};

export default AnimatedDescription;
