import { ProjectInsert } from "@/types/models/project-model";
import { getUserByKindeId } from "../auth/get-user-by-kinde-id";
import { db } from "@/database";
import { projects } from "@/database/schema";

export async function createProject(kindeId: string, project: ProjectInsert) {
    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    const newProject = await db
        .insert(projects)
        .values({ ...project, ownerId: user.id })
        .returning();

    if (!newProject) {
        return {
            success: false,
        };
    }

    return {
        success: true,
        project: newProject,
    };
}
