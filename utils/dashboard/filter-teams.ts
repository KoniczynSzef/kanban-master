import { Team } from "@/types/models/team-model";
import { SortingStrategy } from "@/types/schemas/searchbar-schema";

export function filterTeams(
    teams: Team[],
    query: string,
    sortingStrategy: SortingStrategy
) {
    if (!query) {
        switch (sortingStrategy) {
            case "Sort by name":
                return teams.toSorted((a, b) => a.name.localeCompare(b.name));
            case "Sort by date":
                return teams.toSorted((a, b) =>
                    a.createdAt.localeCompare(b.createdAt)
                );
            default:
                return teams;
        }
    }

    const lowerQuery = query.toLowerCase();

    const filteredTeams = teams.filter((team) => {
        const lowerName = team.name.toLowerCase();

        return lowerName.includes(lowerQuery);
    });

    switch (sortingStrategy) {
        case "Sort by name":
            return filteredTeams.toSorted((a, b) =>
                a.name.localeCompare(b.name)
            );
        case "Sort by date":
            return filteredTeams.toSorted((a, b) =>
                a.createdAt.localeCompare(b.createdAt)
            );
        default:
            return filteredTeams;
    }
}
