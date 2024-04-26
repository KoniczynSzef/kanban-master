import React, { FC } from "react";
import AnimatedHeader from "./AnimatedHeader";
import AnimatedDescription from "./AnimatedDescription";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="text-center flex flex-col items-center gap-4">
            <AnimatedHeader>
                <h1 className="text-6xl font-extrabold uppercase">
                    Manage your workflow
                </h1>
                <h2 className="text-3xl font-medium text-primary">
                    Organize everything in just few clicks
                </h2>
            </AnimatedHeader>

            <AnimatedDescription />
        </div>
    );
};

export default HeroSection;
