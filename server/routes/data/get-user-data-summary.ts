import { getProjectsByUserId } from "../projects/get-projects-by-user-id";
import { getTasksByUserId } from "../tasks/get-tasks-by-user-id";
import { getTeamsByUserId } from "../teams/get-teams-by-user-id";
import { getUserById } from "../user/get-user-by-id";

export async function getUserDataSummary(userId: string) {
    const user = await getUserById(userId);

    const userTeams = await getTeamsByUserId(user.id);
    const userProjects = await getProjectsByUserId(user.id);
    const userTasks = await getTasksByUserId(user.id);

    return {
        userTeams,
        userProjects,
        userTasks,
    };
}
