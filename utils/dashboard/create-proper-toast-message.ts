import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

export function createProperToastMessage(
    prop: keyof CreateTeamSchema | Array<keyof CreateTeamSchema>,
    form: CreateTeamSchema
) {
    let message = "";

    if (typeof prop === "object") {
        for (let i = 0; i < prop.length; i++) {
            if (!form[prop[i]]) {
                message = `Please provide a ${prop[i]}!`;
                break;
            }
        }

        return {
            message: message.length > 0 ? message : "Beautiful description!",
            toastType: message.length > 0 ? "error" : "success",
        };
    }

    if (prop === "teamRole") {
        message = !form.teamRole
            ? "Please select a role!"
            : "Role selected successfully!";
    }

    if (prop === "teamChatLink") {
        message = !form.teamChatLink
            ? "Please provide a team chat link!"
            : "Team chat link provided!";
    }

    if (prop === "teamColor") {
        message = !form.teamColor
            ? "Please provide a color for team!"
            : "Color provided!";
    }

    if (prop === "description") {
        message = !form.description
            ? "Please provide a description for team!"
            : "Description provided!";
    }

    if (prop === "name") {
        message = !form.name
            ? "Please provide a name for team!"
            : "Name provided!";
    }

    return {
        message,
        toastType: form[prop] ? "success" : "error",
    };
}
