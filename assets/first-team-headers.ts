type Header = {
    title: string;
    description: string;
    buttonText: string;
};

const firstTeamHeaders: Header[] = [
    {
        title: ``,
        description: "",
        buttonText: "Save Role",
    },
    {
        title: "Add team chat link",
        description:
            "Add team chat link to get started with your projects and sync up with your team",
        buttonText: "Add Link",
    },
    {
        title: "Create your first team to get started with your projects",
        description: "Create your first team to get started with your projects",
        buttonText: "Create Team",
    },
];

export function displayHeader(index: number, name: string) {
    if (index === 0) {
        return {
            title: `Welcome to the dashboard, ${name}`,
            description:
                "Tell us more about yourself by adding your common role",
            buttonText: "Save Role",
        };
    }

    return firstTeamHeaders[index];
}
