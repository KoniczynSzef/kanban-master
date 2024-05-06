import { motion } from "framer-motion";

import { User } from "@/types/models/user-model";
import React, { FC } from "react";
import SelectRole from "./SelectRole";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import Steps from "./Steps";
import CreateFirstTeam from "./CreateFirstTeam";
import { displayHeader } from "@/assets/first-team-headers";
import { useForm } from "react-hook-form";
import {
    CreateTeamSchema,
    createTeamSchema,
} from "@/types/schemas/teams/create-team-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { createProperToastMessage } from "@/utils/dashboard/create-proper-toast-message";

interface Props {
    user: User;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<
        QueryObserverResult<{
            user: User[];
        } | null>
    >;
}

const WelcomeToDashboard: FC<Props> = (props) => {
    const [step, setStep] = React.useState(0);
    const maxVisitedStep = React.useRef(0);

    const headers = displayHeader(step, props.user.name);

    const form = useForm<CreateTeamSchema>({
        resolver: zodResolver(createTeamSchema),
        mode: "onChange",
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        console.log(data);
    });

    const handleGoToNextStep = (prop: keyof CreateTeamSchema) => {
        const { message, toastType } = createProperToastMessage(prop, form);

        if (toastType === "error") {
            return toast.error(message);
        }

        setStep((prev) => prev + 1);
        maxVisitedStep.current = step + 1;

        console.log(maxVisitedStep);

        toast.success(message);
    };

    return (
        <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-3xl font-semibold text-primary">
                {headers.title}
            </h1>

            <p className="text-muted-foreground mt-2">{headers.description}</p>

            <Form {...form}>
                <form
                    action=""
                    className="border border-muted rounded-2xl p-8 mt-16 max-w-3xl mx-auto flex flex-col gap-8"
                    onSubmit={handleSubmit}
                >
                    <Steps
                        step={step}
                        setStep={setStep}
                        form={form}
                        maxVisitedStep={maxVisitedStep.current}
                    />
                    {step === 0 && (
                        <SelectRole
                            user={props.user}
                            refetch={props.refetch}
                            setStep={setStep}
                            form={form}
                        />
                    )}
                    {step === 1 && <CreateFirstTeam />}

                    <Button
                        className="self-center w-32"
                        onClick={() => handleGoToNextStep("teamRole")}
                    >
                        {headers.buttonText}
                    </Button>
                </form>
            </Form>
        </motion.section>
    );
};

export default WelcomeToDashboard;
