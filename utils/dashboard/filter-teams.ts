import { Team } from "@/types/models/team-model";
import { SortingStrategy } from "@/types/schemas/searchbar-schema";

function sortTeams(teams: Team[], sortingStrategy: SortingStrategy) {
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

function filterByQuery(teams: Team[], query: string) {
    return teams.filter((team) =>
        team.name.toLowerCase().includes(query.toLowerCase())
    );
}

function compareTeamsArrays(teams: Team[], newTeams: Team[]) {
    if (teams.length !== newTeams.length) return true;

    // prettier-ignore
    const highestLength = teams.length > newTeams.length ? teams.length : newTeams.length;

    for (let i = 0; i < highestLength; i++) {
        if (teams[i] !== newTeams[i]) {
            return true;
        }
    }

    return false;
}

// prettier-ignore
export function filterTeams(teams: Team[], query: string, sortingStrategy: SortingStrategy, currentTeams: Team[]) {
    if (!query) {
        const newTeams = sortTeams(teams, sortingStrategy);

        return {
            teams: newTeams,
            hasChanged: compareTeamsArrays(teams, newTeams),
        }
    }

    const filteredTeams = filterByQuery(teams, query);

    console.log(filteredTeams, currentTeams);    

    return {
        teams: sortTeams(filteredTeams, sortingStrategy),
        hasChanged: compareTeamsArrays(currentTeams, filteredTeams),
    } 
}
