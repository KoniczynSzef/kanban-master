import React, { FC } from "react";
import Lottie from "react-lottie";
import animationData from "@/images/mouse-click.json";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
    hasLoaded: boolean;
}

const ClickAnimation: FC<Props> = (props) => {
    return (
        <AnimatePresence>
            {!props.hasLoaded ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute right-0 top-8 md:top-4 md:-right-8 bg-purple-50 rounded-full"
                >
                    <Lottie
                        options={{
                            animationData,
                        }}
                        width={100}
                        height={100}
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default ClickAnimation;
