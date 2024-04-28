import { Feature } from "@/types/homepage/Feature";
import teamwork from "@/images/teamwork.svg";
import kanban from "@/images/kanban.svg";
import integrations from "@/images/integrations.svg";
import charts from "@/images/charts.svg";
import { StaticImageData } from "next/image";

export const features: Feature[] = [
    {
        title: "Work Management",
        description: "Manage your projects and tasks in one place.",
        imageImport: teamwork as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Kanban Boards",
        description:
            "Organize your tasks on Kanban boards to visualize your progress.",
        imageImport: kanban as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Integrations",
        description:
            "Integrate with your favorite tools to streamline your workflow.",
        imageImport: integrations as StaticImageData,
        imageAlt: "Image of a team working together",
    },

    {
        title: "Charts and Reports",
        description: "View detailed stats to analyze working processes.",
        imageImport: charts as StaticImageData,
        imageAlt: "Image of a team working together",
    },
];
