import { Header, createTeamHeaders } from "@/assets/create-team-headers";

export function displayHeader(
    isWelcomePage: boolean,
    index: number,
    name: string
): Header {
    if (index === 0) {
        if (isWelcomePage) {
            return {
                title: `Welcome to the dashboard, ${name}`,
                description:
                    "Tell us more about yourself by adding your common role",
                buttonText: "Save Role",
                required: true,
                formFieldText: "Select your role in the team",
            };
        }

        return {
            title: `Let's start with your role in the team, ${name}`,
            description:
                "Tell us more about yourself by adding your common role",
            buttonText: "Save Role",
            required: true,
            formFieldText: "Select your role in the team",
        };
    }

    return createTeamHeaders[index];
}
