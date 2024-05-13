import { motion } from "framer-motion";

import { User } from "@/types/models/user-model";
import React, { FC } from "react";
import { displayHeader } from "@/assets/create-team-headers";
import { useForm } from "react-hook-form";
import {
    CreateTeamSchema,
    createTeamSchema,
} from "@/types/schemas/teams/create-team-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import WelcomeForm from "../create-team-form/WelcomeForm";

interface Props {
    user: User;
}

const WelcomeToDashboard: FC<Props> = (props) => {
    const [step, setStep] = React.useState(0);
    const maxVisitedStep = React.useRef(0);

    const headers = displayHeader(true, step, props.user.name);

    const form = useForm<CreateTeamSchema>({
        resolver: zodResolver(createTeamSchema),
        mode: "onChange",
        defaultValues: {
            teamColor: "#000000",
        },
    });

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
                    headers,
                    user: props.user,
                }}
            />
        </motion.section>
    );
};

export default WelcomeToDashboard;
