import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { UseFormReturn } from "react-hook-form";

export function createProperToastMessage(
    prop: keyof CreateTeamSchema,
    form: UseFormReturn<CreateTeamSchema>
) {
    let message = "";
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
