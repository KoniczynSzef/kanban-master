import React, { FC } from "react";
import { features } from "@/assets/features";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { shouldSpanCard } from "@/utils/should-span-card";

interface Props {}

const bgColors = [
    "bg-darkPrimary",
    "bg-gradient-to-br from-[#141E30] to-[#243B55]",
    "bg-gradient-to-br from-primary to-sky-700",
    "bg-[#e0142f]",
];

interface FeatureCardProps {
    title: string;
    description: string;
    imageImport: StaticImageData;
    imageAlt: string;

    shouldSpanCard: boolean;
    index: number;
}

function FeatureCard(props: FeatureCardProps) {
    const colSpan = props.shouldSpanCard ? "lg:col-span-7" : "lg:col-span-5";

    const shouldTranslate = props.index % 2 === 1 ? "md:translate-y-16" : "";

    return (
        <div
            className={`rounded-lg p-6 flex flex-col gap-8 border border-muted text-neutral-50 justify-between ${colSpan} ${shouldTranslate}`}
        >
            <Image
                src={props.imageImport}
                alt={props.imageAlt}
                width={300}
                height={300}
                className="self-center"
            />
            <div
                className={cn(
                    bgColors[props.index],
                    "p-8 rounded-2xl transition-all duration-300 flex flex-col gap-4"
                )}
            >
                <h3 className="text-xl font-semibold">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

const FeaturesGrid: FC<Props> = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 lg:gap-y-32 gap-16 my-16">
            {features.map((feature, index) => {
                return (
                    <FeatureCard
                        key={index}
                        {...feature}
                        shouldSpanCard={shouldSpanCard(index)}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default FeaturesGrid;
