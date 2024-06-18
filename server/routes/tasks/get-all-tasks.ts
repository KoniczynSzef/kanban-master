import { db } from "@/database";
import { kanbanTasks, usersToTasks } from "@/database/schema";
import { KanbanTask } from "@/types/models/task-model";
import { eq } from "drizzle-orm";

export async function getAllTasks(userId: string) {
    const res = await db.query.usersToTasks.findMany({
        where: eq(usersToTasks.userId, userId),
    });

    if (res.length === 0) {
        return [];
    }

    const fetchedTasks: KanbanTask[] = [];

    for (const userToTask of res) {
        const task = await db.query.kanbanTasks.findFirst({
            where: eq(kanbanTasks.id, userToTask.taskId),
        });

        if (task) {
            fetchedTasks.push(task);
        }
    }

    return fetchedTasks;
}
