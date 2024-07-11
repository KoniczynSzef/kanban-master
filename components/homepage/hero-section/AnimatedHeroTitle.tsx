"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
    text: string;
}

export const AnimatedHeroTitle: React.FC<Props> = (props) => {
    return (
        <motion.h1
            className="text-7xl font-bold text-purple-800 dark:text-purple-200 flex-wrap justify-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {props.text}
        </motion.h1>
    );
};
