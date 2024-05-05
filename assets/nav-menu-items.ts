import { type NavMenuItem as TNavMenuItem } from "@/types/nav-menu-item";

export const navMenuItems: TNavMenuItem[] = [
    {
        triggerTitle: "Learn",
        content: [
            {
                href: "/getting-started",
                title: "Getting Started",
                itemDescription:
                    "Learn how to get started with KanMaster. Create your first team and project 🧑‍💻",
            },
            {
                href: "/features",
                title: "Features",
                itemDescription:
                    "Explore all the features that KanMaster offers. Learn how to manage your projects effortlessly 📊",
            },
            {
                href: "/pricing",
                title: "Pricing",
                itemDescription:
                    "Check out our pricing plans and choose the one that fits your needs. Start for free 🎁",
            },
            {
                href: "/integrations",
                title: "Integrations",
                itemDescription:
                    "Connect your favorite tools with KanMaster. Get more done with less effort 🛠️",
            },
        ],
    },
    {
        triggerTitle: "Manage",
        content: [
            {
                href: "/dashboard",
                title: "Dashboard",
                itemDescription:
                    "View all projects, tasks, and members in one place. Full power of Kanban is here 🚀",
            },
            {
                href: "/dashboard/projects/new",
                title: "New Project",
                itemDescription:
                    "Create a new project and invite your team members. Start working together and get things done 🎉",
            },
        ],
    },
];
