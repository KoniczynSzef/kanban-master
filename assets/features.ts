import { Feature } from "@/types/homepage/Feature";
import teamwork from "@/images/teamwork.svg";
import { StaticImageData } from "next/image";

export const features: Feature[] = [
    {
        title: "Team Management",
        description: "Manage your teams and collaborate with team members.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Task Management",
        description:
            "Create, assign and track tasks to ensure everything is completed on time.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Project Management",
        description: "Create projects, assign tasks and track their progress.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Time Tracking",
        description:
            "Track the time spent on tasks to ensure accurate billing.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
    },
];
