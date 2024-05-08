import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { UseFormReturn } from "react-hook-form";

export function createProperToastMessage(
    prop: keyof CreateTeamSchema | Array<keyof CreateTeamSchema>,
    form: UseFormReturn<CreateTeamSchema>
) {
    let message = "";

    if (typeof prop === "object") {
        for (let i = 0; i < prop.length; i++) {
            if (!form.getValues()[prop[i]]) {
                message = `Please provide a ${prop[i]}!`;
                break;
            }
        }

        return {
            message: message ?? "All fields provided successfully!",
            toastType: message ? "error" : "success",
        };
    }

    if (prop === "teamRole") {
        message = !form.getValues().teamRole
            ? "Please select a role!"
            : "Role selected successfully!";
    }

    if (prop === "teamChatLink") {
        message = !form.getValues().teamChatLink
            ? "Please provide a team chat link!"
            : "Team chat link provided!";
    }

    if (prop === "teamColor") {
        message = !form.getValues().teamColor
            ? "Please provide a color for team!"
            : "Color provided!";
    }

    if (prop === "description") {
        message = !form.getValues().description
            ? "Please provide a description for team!"
            : "Description provided!";
    }

    if (prop === "name") {
        message = !form.getValues().name
            ? "Please provide a name for team!"
            : "Name provided!";
    }

    return {
        message,
        toastType: form.getValues()[prop] ? "success" : "error",
    };
}
