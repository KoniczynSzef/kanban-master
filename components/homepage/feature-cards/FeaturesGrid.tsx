import { features } from "@/assets/features";
import Image from "next/image";
import React, { FC } from "react";

interface Props {}

const FeaturesGrid: FC<Props> = () => {
    return (
        <div className="grid grid-cols-12 gap-16">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ${feature.featureBgColor} rounded-lg p-6`}
                >
                    <Image src={feature.imageImport} alt={feature.imageAlt} />
                    <h3 className="text-lg font-medium mb-2">
                        {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesGrid;
