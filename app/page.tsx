import LayoutGrid from "@/components/homepage/feature-cards/LayoutGrid";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Metadata } from "next";
import React, { FC } from "react";

interface Props {}

export const metadata: Metadata = {
    title: "KanMaster",
    description:
        "KanMaster is a project management tool that helps you organize your work.",
};

const page: FC<Props> = async () => {
    return (
        <>
            <HeroSection />
            <LayoutGrid />
        </>
    );
};

export default page;
