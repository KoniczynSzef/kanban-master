import LayoutGrid from "@/components/homepage/feature-cards/LayoutGrid";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = async () => {
    return (
        <>
            <HeroSection />
            <LayoutGrid />
        </>
    );
};

export default page;
