import React, { FC } from "react";
import { Features } from "./Features";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col items-center w-full px-8">
            <h2 className="text-5xl font-bold text-center text-header">
                KanMaster Features
            </h2>
            <p className="text-center text-muted-foreground text-lg mt-4">
                What makes KanMaster the best choice for your project?
            </p>

            <Features />
        </section>
    );
};

export default LayoutGrid;
