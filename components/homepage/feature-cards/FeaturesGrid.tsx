import React, { FC } from "react";
import { features } from "@/assets/features";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface Props {}

interface FeatureCardProps {
    title: string;
    description: string;
    imageImport: StaticImageData;
    imageAlt: string;
    className: string;

    colSpan: string;
}

function FeatureCard(props: FeatureCardProps) {
    return (
        <div
            className={cn(
                `rounded-lg p-6 text-white flex flex-col gap-8 border border-muted hover:scale-95 transition duration-300`,
                props.colSpan
            )}
        >
            <Image
                src={props.imageImport}
                alt={props.imageAlt}
                width={300}
                height={300}
            />
            <div
                className={cn(
                    props.className,
                    "p-4 rounded-2xl transition-all duration-300"
                )}
            >
                <h3 className="text-lg font-medium mb-2">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

const FeaturesGrid: FC<Props> = () => {
    return (
        <div className="grid grid-cols-12 gap-16 my-16">
            {features.map((feature, index) => {
                const span = index % 2 === 0 ? "col-span-4" : "col-span-8";
                return <FeatureCard key={index} {...feature} colSpan={span} />;
            })}
        </div>
    );
};

export default FeaturesGrid;
