import React, { FC } from "react";
import { Form } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { Button } from "../ui/button";
import SelectRole from "./SelectRole";
import { User } from "@/types/models/user-model";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import Steps from "./Steps";
import AddTeamChatLink from "./AddTeamChatLink";
import FormHeader from "./FormHeader";
import { Header } from "@/assets/first-team-headers";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    maxVisitedStep: React.MutableRefObject<number>;
    handleSubmit: (
        e?: React.BaseSyntheticEvent<object> | undefined
    ) => Promise<void>;
    handleGoToNextStep: (prop: keyof CreateTeamSchema) => void;
    headers: Header;
    user: User;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<
        QueryObserverResult<{
            user: User[];
        } | null>
    >;
}

const WelcomeForm: FC<Props> = (props) => {
    return (
        <Form {...props.form}>
            <form
                action=""
                className="border border-muted rounded-2xl p-8 mt-16 max-w-3xl mx-auto flex flex-col gap-8"
                onSubmit={props.handleSubmit}
            >
                <Steps
                    step={props.step}
                    setStep={props.setStep}
                    form={props.form}
                    maxVisitedStep={props.maxVisitedStep.current}
                />

                <FormHeader
                    desc={props.headers.formFieldText}
                    required={props.headers.required}
                />

                {props.step === 0 && (
                    <SelectRole
                        user={props.user}
                        refetch={props.refetch}
                        setStep={props.setStep}
                        form={props.form}
                    />
                )}
                {props.step === 1 && <AddTeamChatLink form={props.form} />}

                <Button
                    className="self-center w-32"
                    onClick={() => props.handleGoToNextStep("teamRole")}
                >
                    {props.headers.buttonText}
                </Button>
            </form>
        </Form>
    );
};

export default WelcomeForm;
