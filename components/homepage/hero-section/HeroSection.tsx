import React, { FC } from "react";
import HeroDescription from "./HeroDescription";
import { ContributeBadge } from "./ContributeBadge";
import { CTAButtons } from "./CTAButtons";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="relative text-center flex flex-col items-center gap-4">
            <ContributeBadge />
            <h1 className="text-7xl font-bold text-purple-200">
                Manage your workflow
            </h1>

            <HeroDescription />

            <CTAButtons />
        </div>
    );
};

export default HeroSection;
