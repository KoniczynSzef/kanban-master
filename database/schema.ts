import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    surname: text("surname"),
    email: text("email").notNull(),
    picture: text("picture").notNull(),
    kindeId: text("kinde_id").notNull(),

    nickname: text("nickname"),
    bio: text("bio"),
    businessEmail: text("business_email"),

    validated: int("validated", { mode: "boolean" }).notNull().default(false),
});

export const projects = sqliteTable("project", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    ownerId: text("owner_id")
        .notNull()
        .references(() => users.id),
    teamId: text("team_id").references(() => teams.id),
});

export const kanbanBoards = sqliteTable("kanban_board", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id),
});

export const kanbanColumns = sqliteTable("kanban_column", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    boardId: text("board_id")
        .notNull()
        .references(() => kanbanBoards.id),
});

export const kanbanTasks = sqliteTable("kanban_task", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    description: text("description"),
    columnId: text("column_id")
        .notNull()
        .references(() => kanbanColumns.id),
    boardId: text("board_id")
        .notNull()
        .references(() => kanbanBoards.id),

    deadline: int("deadline", { mode: "timestamp_ms" }),
    priority: text("priority", { enum: ["low", "medium", "high"] }),
    note: text("note"),
    columnIndex: int("column_index").notNull(),

    assigneeId: text("assignee_id"),
    creatorId: text("creator_id").references(() => users.id),
});

export const teams = sqliteTable("team", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    ownerId: text("owner_id")
        .notNull()
        .references(() => users.id),
});

export const usersToTeams = sqliteTable("user_to_team", {
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    teamId: text("team_id")
        .notNull()
        .references(() => teams.id),
});
