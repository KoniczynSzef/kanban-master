import { db } from "@/database";
import { usersToProjects } from "@/database/helper-tables";
import { projects } from "@/database/schema";
import { eq, inArray } from "drizzle-orm";

export async function getAllProjects(userId: string) {
    const res = await db.query.usersToProjects.findMany({
        where: eq(usersToProjects.userId, userId),
    });

    if (res.length === 0) {
        return [];
    }

    const projectIds = res.map((r) => r.projectId);

    const projectArr = await db.query.projects.findMany({
        where: inArray(projects.id, projectIds),
    });

    return projectArr;
}
