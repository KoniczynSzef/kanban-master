import React, { FC } from "react";

interface Props {
    step: number;
}

const Steps: FC<Props> = (props) => {
    return (
        <div className="flex justify-evenly">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`rounded-full h-12 w-12 border border-muted grid place-content-center transition duration-300 text-muted-foreground ${
                            props.step === index ? "bg-primary text-white" : ""
                        }`}
                    >
                        {index + 1}
                    </div>

                    {index !== 3 && <div className="w-24 h-1 bg-muted ml-6" />}
                </div>
            ))}
        </div>
    );
};

export default Steps;
