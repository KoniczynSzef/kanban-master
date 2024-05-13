import React, { FC } from "react";
import { Form } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import SelectRole from "./SelectRole";
import Steps from "./Steps";
import AddTeamChatLink from "./AddTeamChatLink";
import FormHeader from "./FormHeader";
import { Header } from "@/assets/first-team-headers";
import NavigationButtons from "./NavigationButtons";
import DescribeYourTeam from "./DescribeYourTeam";
import PickColor from "./PickColor";
import { AMOUNT_OF_STEPS } from "@/constants/amount-of-steps";
import { Button } from "../ui/button";

import { Loader } from "lucide-react";
import { trpc } from "@/server/trpc";
import { User } from "@/types/models/user-model";
import { toast } from "sonner";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    maxVisitedStep: React.MutableRefObject<number>;

    headers: Header;
    user: User;
}

const WelcomeForm: FC<Props> = (props) => {
    const visitDashboard = trpc.visitDashboard.useMutation({
        onSettled: () => {
            window.location.reload();
        },
    });

    const createTeam = trpc.createTeam.useMutation({
        onSettled: () => {
            toast.success("Team created successfully");
            visitDashboard.mutate(props.user.kindeId);
        },
    });

    const handleSubmit = props.form.handleSubmit(async (data) => {
        createTeam.mutate({
            userId: props.user.id,
            data: data,
        });
    });

    return (
        <Form {...props.form}>
            <form
                action=""
                className="border border-muted rounded-2xl p-8 mt-16 max-w-3xl mx-auto flex flex-col gap-8"
                onSubmit={handleSubmit}
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

                <div className="my-8 flex flex-col gap-6">
                    {props.step === 0 && <SelectRole form={props.form} />}

                    {props.step === 1 && <AddTeamChatLink form={props.form} />}

                    {props.step === 2 && <DescribeYourTeam form={props.form} />}

                    {props.step === 3 && <PickColor form={props.form} />}
                </div>

                {props.step < AMOUNT_OF_STEPS - 1 ? (
                    <NavigationButtons
                        headers={props.headers}
                        step={props.step}
                        maxVisitedStep={props.maxVisitedStep}
                        setStep={props.setStep}
                        form={props.form}
                    />
                ) : (
                    <Button type="submit" disabled={createTeam.isLoading}>
                        {createTeam.isLoading ? (
                            <Loader className="animate-spin" />
                        ) : (
                            "Create Team"
                        )}
                    </Button>
                )}
            </form>
        </Form>
    );
};

export default WelcomeForm;
