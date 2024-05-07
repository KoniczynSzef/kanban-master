export type Header = {
    title: string;
    description: string;
    buttonText: string;
    required: boolean;
    formFieldText: string;
};

const firstTeamHeaders: Header[] = [
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
        title: "Create your first team to get started with your projects",
        description: "Create your first team to get started with your projects",
        buttonText: "Create Team",
        required: true,
        formFieldText:
            "Provide a descriptive name and description for your team",
    },
];

export function displayHeader(index: number, name: string): Header {
    if (index === 0) {
        return {
            title: `Welcome to the dashboard, ${name}`,
            description:
                "Tell us more about yourself by adding your common role",
            buttonText: "Save Role",
            required: true,
            formFieldText: "Select your role in the team",
        };
    }

    return firstTeamHeaders[index];
}
