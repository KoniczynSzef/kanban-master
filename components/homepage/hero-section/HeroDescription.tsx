import React, { FC } from "react";

interface Props {}

const HeroDescription: FC<Props> = () => {
    return (
        <div className="mt-4 text-center flex flex-col items-center text-muted-foreground text-lg gap-1">
            <p>Monitor your progress and keep track of your tasks.</p>

            <p>Get things done!</p>
        </div>
    );
};

export default HeroDescription;
