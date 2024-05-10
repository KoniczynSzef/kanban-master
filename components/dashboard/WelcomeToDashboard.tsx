import { motion } from "framer-motion";

import { User } from "@/types/models/user-model";
import React, { FC } from "react";
import { displayHeader } from "@/assets/first-team-headers";
import { useForm } from "react-hook-form";
import {
    CreateTeamSchema,
    createTeamSchema,
} from "@/types/schemas/teams/create-team-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createProperToastMessage } from "@/utils/dashboard/create-proper-toast-message";
import WelcomeForm from "./WelcomeForm";
import { trpc } from "@/server/trpc";
import { revalidatePath } from "next/cache";

interface Props {
    user: User;
}

const WelcomeToDashboard: FC<Props> = (props) => {
    const { mutate, isLoading } = trpc.createTeam.useMutation({
        onSettled: () => {
            toast.success("Team created successfully");
            revalidatePath("/dashboard");
        },
    });

    const [step, setStep] = React.useState(0);
    const maxVisitedStep = React.useRef(0);

    const headers = displayHeader(step, props.user.name);

    const form = useForm<CreateTeamSchema>({
        resolver: zodResolver(createTeamSchema),
        mode: "onChange",
        defaultValues: {
            teamColor: "#000000",
        },
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        mutate({
            kindeId: props.user.kindeId,
            data: data,
        });
        // TODO: Handle form submission
        // ! Here there will be a backend tRPC call to create a team using the data
    });

    const handleGoToNextStep = (
        skipped: boolean,
        prop: keyof CreateTeamSchema | Array<keyof CreateTeamSchema>
    ) => {
        if (skipped) {
            setStep((prev) => prev + 1);
            maxVisitedStep.current = step + 1;
            return;
        }

        const { message, toastType } = createProperToastMessage(prop, form);

        if (toastType === "error") {
            toast.error(message);
            return;
        }

        setStep((prev) => prev + 1);
        maxVisitedStep.current = step + 1;

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

            <WelcomeForm
                {...{
                    form,
                    step,
                    setStep,
                    maxVisitedStep,
                    handleSubmit,
                    handleGoToNextStep,
                    headers,
                }}
            />
        </motion.section>
    );
};

export default WelcomeToDashboard;
