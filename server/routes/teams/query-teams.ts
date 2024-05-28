import { Team } from "@/types/models/team-model";

export function queryTeams(teams: Team[], query: string) {
    return teams.filter((team) =>
        team.name.toLowerCase().includes(query.toLowerCase())
    );
}
