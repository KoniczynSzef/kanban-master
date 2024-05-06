import React, { FC } from "react";
import { Button } from "../ui/button";
// import { resetFormDataByStep } from "@/utils/dashboard/reset-form-data-by-step";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

interface Props {
    step: number;
    maxVisitedStep: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    form: UseFormReturn<CreateTeamSchema>;
}

const Steps: FC<Props> = (props) => {
    console.log(props.step);

    const handleClick = (index: number) => {
        // resetFormDataByStep(props.form, index, props.setStep);
        props.setStep(index);
    };

    return (
        <div
            className="flex justify-evenly"
            aria-description="Steps component that displays current stage of form"
        >
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="flex items-center"
                    aria-description="Step component combining button and bar"
                >
                    <Button
                        variant={`${
                            index === props.step ? "default" : "outline"
                        }`}
                        className="h-12 w-12 rounded-full"
                        disabled={
                            index > props.maxVisitedStep || index === props.step
                        }
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </Button>

                    {index !== 3 && <div className="w-24 h-1 bg-muted ml-6" />}
                </div>
            ))}
        </div>
    );
};

export default Steps;
