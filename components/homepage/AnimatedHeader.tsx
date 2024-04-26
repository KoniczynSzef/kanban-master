"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const AnimatedHeader: FC<Props> = (props) => {
    return (
        <div className="relative">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
                className="flex flex-col gap-4"
            >
                {props.children}
            </motion.div>
        </div>
    );
};

export default AnimatedHeader;
