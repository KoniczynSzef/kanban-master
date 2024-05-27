import { Team } from "@/types/models/team-model";
import { z } from "zod";

export const queryTeamsSchema = z.object({
    query: z.string(),
    // teams: z.array(z.object(Team)),
});

export function queryTeams(teams: Team[], query: string) {
    return teams.filter((team) =>
        team.name.toLowerCase().includes(query.toLowerCase())
    );
}
