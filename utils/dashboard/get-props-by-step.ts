import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

export function getPropsByStep(
    step: number
): keyof CreateTeamSchema | Array<keyof CreateTeamSchema> {
    switch (step) {
        case 0:
            return "teamRole";
        case 1:
            return "teamChatLink";
        case 2:
            return ["name", "description"];
        case 3:
            return "teamColor";
        default:
            return "teamRole";
    }
}
