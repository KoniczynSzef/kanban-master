import { db } from "@/database";
import { projects, usersToProjects } from "@/database/schema";
import { Project } from "@/types/models/project-model";
import { eq } from "drizzle-orm";

export async function getProjectsByUserId(userId: string) {
    const data = await db.query.usersToProjects.findMany({
        where: eq(usersToProjects.userId, userId),
    });

    if (data.length === 0) {
        return [];
    }

    const fetchedProjects: Project[] = [];

    for (const userToProject of data) {
        const project = await db.query.projects.findFirst({
            where: eq(projects.id, userToProject.projectId),
        });

        if (project) {
            fetchedProjects.push(project);
        }
    }

    return fetchedProjects;
}
