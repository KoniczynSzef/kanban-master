import React, { FC } from "react";
import HeroDescription from "./HeroDescription";
import { ContributeBadge } from "./ContributeBadge";
import { CTAButtons } from "./CTAButtons";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="relative text-center flex flex-col items-center gap-4">
            <ContributeBadge />
            <AnimatedHeroTitle text="Manage your workflow" />

            <HeroDescription />

            <CTAButtons />
        </div>
    );
};

export default HeroSection;
