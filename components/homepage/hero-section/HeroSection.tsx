import React, { FC } from "react";
import AnimatedHeader from "./AnimatedHeader";
import AnimatedDescription from "./AnimatedDescription";
import Image from "next/image";

import kanbanSlogan from "@/images/kanban-slogan.svg";

interface Props {}

const HeroSection: FC<Props> = () => {
    return (
        <div className="relative text-center flex flex-col items-center gap-4">
            <AnimatedHeader>
                <h1 className="text-6xl font-extrabold uppercase">
                    Manage your workflow
                </h1>
            </AnimatedHeader>

            <AnimatedDescription />

            <Image
                src={kanbanSlogan}
                alt="Kanban is coooool!"
                width={300}
                height={300}
                className="absolute -bottom-16 md:-bottom-4 left-4 translate-y-1/2 -rotate-3"
            />
        </div>
    );
};

export default HeroSection;
