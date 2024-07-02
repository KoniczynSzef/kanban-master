import { Features } from "@/components/homepage/features/Features";
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
            <Features />
        </>
    );
};

export default page;
