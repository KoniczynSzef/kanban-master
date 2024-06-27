import React, { FC } from "react";
import HeroDescription from "./HeroDescription";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="relative text-center flex flex-col items-center gap-4">
            <h1 className="text-7xl font-bold">Manage your workflow</h1>

            <HeroDescription />
        </div>
    );
};

export default HeroSection;
