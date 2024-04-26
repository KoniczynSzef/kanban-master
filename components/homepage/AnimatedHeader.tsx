"use client";

import React, { FC } from "react";
import ClickAnimation from "./ClickAnimation";

interface Props {
    children: React.ReactNode;
}

const AnimatedHeader: FC<Props> = (props) => {
    const [hasLoaded, setHasLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 1000);
    }, []);

    return (
        <div className="relative">
            {props.children}
            <div className="flex justify-center relative mt-6">
                <h2 className="text-3xl font-medium text-primary">
                    Organize everything in just few clicks
                </h2>
                <ClickAnimation hasLoaded={hasLoaded} />
            </div>
        </div>
    );
};

export default AnimatedHeader;
