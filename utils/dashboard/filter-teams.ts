import { Team } from "@/types/models/team-model";

export function filterTeams(
    teams: Team[],
    query: string,
    shouldSortByName: boolean
) {
    if (!query) {
        return teams.toSorted((a, b) =>
            shouldSortByName
                ? a.name.localeCompare(b.name)
                : a.createdAt.localeCompare(b.createdAt)
        );
    }

    const lowerQuery = query.toLowerCase();

    return teams
        .filter((team) => {
            const lowerName = team.name.toLowerCase();

            return lowerName.includes(lowerQuery);
        })
        .toSorted((a, b) =>
            shouldSortByName
                ? a.name.localeCompare(b.name)
                : a.createdAt.localeCompare(b.createdAt)
        );
}
