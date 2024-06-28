import React, { FC } from "react";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <section className="flex flex-col items-center bg-slate-950 w-full p-8">
            <h2 className="text-5xl font-bold text-center text-purple-50">
                KanMaster Features
            </h2>
            <p className="text-center text-purple-300 text-lg mt-4">
                What makes KanMaster the best choice for your project?
            </p>
        </section>
    );
};

export default LayoutGrid;
