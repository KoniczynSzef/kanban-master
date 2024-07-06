"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const AnimatedWrapper: React.FC<Props> = (props) => {
    return (
        <motion.div
            className="ml-[24rem] mr-[8rem] w-full"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            {props.children}
        </motion.div>
    );
};
