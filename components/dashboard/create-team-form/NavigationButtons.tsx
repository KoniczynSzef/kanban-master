import { Header } from "@/assets/create-team-headers";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import React, { FC } from "react";
import { Button } from "../../ui/button";
import { getPropsByStep } from "@/utils/dashboard/get-props-by-step";
import { toast } from "sonner";
import { createProperToastMessage } from "@/utils/dashboard/create-proper-toast-message";
import { UseFormReturn } from "react-hook-form";

interface Props {
    headers: Header;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    maxVisitedStep: React.MutableRefObject<number>;
    form: UseFormReturn<CreateTeamSchema>;
}

const NavigationButtons: FC<Props> = (props) => {
    const handleGoToNextStep = (
        skipped: boolean,
        prop: keyof CreateTeamSchema | Array<keyof CreateTeamSchema>
    ) => {
        if (skipped) {
            props.setStep((prev) => prev + 1);
            props.maxVisitedStep.current = props.step + 1;
            return;
        }

        const { message, toastType } = createProperToastMessage(
            prop,
            props.form.getValues()
        );

        if (toastType === "error") {
            toast.error(message);
            return;
        }

        props.setStep((prev) => prev + 1);
        props.maxVisitedStep.current = props.step + 1;

        toast.success(message);
    };
    return (
        <div className="flex items-center justify-evenly mt-8">
            {!props.headers.required && (
                <Button
                    variant={"secondary"}
                    onClick={() => handleGoToNextStep(true, "teamRole")}
                    type="button"
                >
                    Skip this for now
                </Button>
            )}

            <Button
                className="self-center w-32"
                onClick={() =>
                    handleGoToNextStep(false, getPropsByStep(props.step))
                }
                type="button"
            >
                {props.headers.buttonText}
            </Button>
        </div>
    );
};

export default NavigationButtons;
