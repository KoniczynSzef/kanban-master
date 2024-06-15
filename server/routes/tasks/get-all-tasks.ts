import { db } from "@/database";
import { kanbanTasks, usersToTasks } from "@/database/schema";
import { eq, inArray } from "drizzle-orm";

export async function getAllTasks(userId: string) {
    const res = await db.query.usersToTasks.findMany({
        where: eq(usersToTasks.userId, userId),
    });

    if (res.length === 0) {
        return [];
    }

    const taskIds = res.map((r) => r.taskId);

    const taskArr = await db.query.kanbanTasks.findMany({
        where: inArray(kanbanTasks.id, taskIds),
    });

    return taskArr;
}
