import HeroSection from "@/components/homepage/HeroSection";
import React, { FC } from "react";

interface Props {}

const page: FC<Props> = () => {
    return (
        <section>
            <HeroSection />
        </section>
    );
};

export default page;
