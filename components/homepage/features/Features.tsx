import React from "react";
import { FeatureCard } from "./FeatureCard";
import { Activity, Cog, PersonStanding, User } from "lucide-react";
import { Feature } from "@/types/home/feature";

interface Props {}

export const Features: React.FC<Props> = () => {
    return (
        <section
            className="flex flex-col items-center w-full px-8"
            id="features"
        >
            <h2 className="text-5xl font-bold text-center text-header">
                KanMaster Features
            </h2>
            <p className="text-center text-muted-foreground text-lg mt-4">
                What makes KanMaster the best choice for your project?
            </p>

            <div className="w-full my-16 flex justify-evenly flex-wrap gap-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </div>
        </section>
    );
};

const features: Feature[] = [
    {
        title: "Tracking Progress",
        description:
            "Create multiple boards to manage your projects. Each board can have multiple columns and cards.",
        icon: <Activity className="text-green-700 dark:text-green-400" />,
    },
    {
        title: "Collaboration",
        description:
            "Invite your team members to collaborate on your projects. Assign tasks to team members.",
        icon: <User className="text-blue-700 dark:text-blue-400" />,
    },
    {
        title: "Customization",
        description:
            "Customize your boards with labels, due dates. Add notes and descriptions to your cards.",
        icon: (
            <PersonStanding className="text-yellow-700 dark:text-yellow-400" />
        ),
    },
    {
        title: "Automation",
        description:
            "Automate your workflow with rules and integrations. Save time and focus on your work.",
        icon: <Cog className="text-red-700 dark:text-red-400" />,
    },
];
