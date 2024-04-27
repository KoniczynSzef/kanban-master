import { Feature } from "@/types/homepage/Feature";
import teamwork from "@/images/teamwork.svg";
import { StaticImageData } from "next/image";

export const features: Feature[] = [
    {
        title: "Team Management",
        description:
            "Manage your team members, assign tasks and track their progress.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
        className: "bg-darkPrimary",
    },
];
