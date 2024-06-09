import { db } from "@/database";
import { kanbanTasks, usersToTasks } from "@/database/schema";
import { InferSelectModel, and, eq, inArray } from "drizzle-orm";

export async function getTasksByStatus(
    userId: string,
    taskStatus: NonNullable<InferSelectModel<typeof kanbanTasks>["status"]>
) {
    const res = await db.query.usersToTasks.findMany({
        where: eq(usersToTasks.userId, userId),
    });

    if (res.length === 0) {
        return [];
    }

    const taskIds = res.map((r) => r.taskId);

    const taskArr = db
        .select()
        .from(kanbanTasks)
        .where(
            and(
                inArray(kanbanTasks.id, taskIds),
                eq(kanbanTasks.status, taskStatus)
            )
        );

    return taskArr;
}
