import React, { FC } from "react";
import FeaturesGrid from "./FeaturesGrid";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col gap-32 items-center">
            <FeaturesGrid />
        </section>
    );
};

export default LayoutGrid;
