import { Header } from "@/assets/first-team-headers";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface Props {
    headers: Header;
    handleGoToNextStep: (
        skipped: boolean,
        prop: keyof CreateTeamSchema
    ) => void;
}

const NavigationButtons: FC<Props> = (props) => {
    return (
        <div className="flex items-center justify-evenly mt-8">
            {!props.headers.required && (
                <Button
                    variant={"secondary"}
                    onClick={() => props.handleGoToNextStep(true, "teamRole")}
                >
                    Skip this for now
                </Button>
            )}

            <Button
                className="self-center w-32"
                onClick={() => props.handleGoToNextStep(false, "teamRole")}
            >
                {props.headers.buttonText}
            </Button>
        </div>
    );
};

export default NavigationButtons;
