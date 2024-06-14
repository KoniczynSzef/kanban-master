import { boolean, pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { kanbanTasks, projects, teams, users } from "./schema";

export const usersToTeams = pgTable(
    "user_to_team",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        teamId: text("team_id")
            .notNull()
            .references(() => teams.id, { onDelete: "cascade" }),
        favourite: boolean("favourite").notNull().default(false),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.teamId] }),
    })
);

export const usersToProjects = pgTable(
    "user_to_project",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        projectId: text("project_id")
            .notNull()
            .references(() => projects.id, { onDelete: "cascade" }),
        favourite: boolean("favourite").notNull().default(false),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.projectId] }),
    })
);

export const usersToTasks = pgTable(
    "user_to_task",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        taskId: text("task_id")
            .notNull()
            .references(() => kanbanTasks.id, { onDelete: "cascade" }),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.taskId] }),
    })
);
