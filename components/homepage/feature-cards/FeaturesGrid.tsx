import React, { FC } from "react";
import { features } from "@/assets/features";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { getColSpan } from "@/utils/get-col-span";

interface Props {}

const bgColors = [
    "bg-darkPrimary",
    "bg-secondary-foreground",
    "bg-[#252329]",
    "bg-[#e0142f]",
];

interface FeatureCardProps {
    title: string;
    description: string;
    imageImport: StaticImageData;
    imageAlt: string;

    colSpan: string;
    index: number;
}

function FeatureCard(props: FeatureCardProps) {
    return (
        <div
            className={cn(
                `rounded-lg p-6 flex flex-col gap-8 border border-muted text-neutral-50 justify-between`,
                props.colSpan
            )}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 my-16">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    {...feature}
                    colSpan={getColSpan(index)}
                    index={index}
                />
            ))}
        </div>
    );
};

export default FeaturesGrid;
