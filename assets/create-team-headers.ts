export type Header = {
    title: string;
    description: string;
    buttonText: string;
    required: boolean;
    formFieldText: string;
};

export const createTeamHeaders: Header[] = [
    {
        title: ``,
        description: "",
        buttonText: "Save Role",
        required: true,
        formFieldText: "Select your role in the team",
    },
    {
        title: "Add team chat link",
        description:
            "Add a link to your team chat like Slack, Discord, etc. to keep your team in sync and navigate to it easily from the dashboard",
        buttonText: "Add Link",
        required: false,
        formFieldText: "Add link to team chat like Slack, Discord, etc.",
    },
    {
        title: "Name and describe your team",
        description:
            "Give your team a name and describe it to help team members understand its purpose",
        buttonText: "Continue",
        required: true,
        formFieldText: "Describe your team and provide a name for it",
    },
    {
        title: "Select your team color",
        description:
            "Choose a color that represents your team and helps you easily identify it",
        buttonText: "Select Color",
        required: true,
        formFieldText: "Select a color for your team",
    },
];
