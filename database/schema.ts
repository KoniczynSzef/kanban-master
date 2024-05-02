import {
    int,
    primaryKey,
    real,
    sqliteTable,
    text,
} from "drizzle-orm/sqlite-core";

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

    teamRole: text("team_role", {
        enum: [
            "Project Manager",
            "Frontend Developer",
            "Backend Developer",
            "QA Tester",
            "Marketing Specialist",
            "Customer Support",
            "Data Analyst",
        ],
    }),

    validated: int("validated", { mode: "boolean" }).notNull().default(false),
    visitedDashboard: int("visited_dashboard", { mode: "boolean" })
        .notNull()
        .default(false),
});

export const projects = sqliteTable("project", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),

    deadline: text("deadline"),
    status: text("status", {
        enum: ["active", "completed", "on hold", "canceled"],
    }).$default(() => "active"),

    budget: real("budget"),
    ownerId: text("owner_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    teamId: text("team_id")
        .notNull()
        .references(() => teams.id),
    createdAt: text("created_at").notNull().default(new Date().toISOString()),
    updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
});

export const kanbanBoards = sqliteTable("kanban_board", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
});

export const kanbanColumns = sqliteTable("kanban_column", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    boardId: text("board_id")
        .notNull()
        .references(() => kanbanBoards.id, { onDelete: "cascade" }),
});

export const kanbanTasks = sqliteTable("kanban_task", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    description: text("description"),
    columnId: text("column_id")
        .notNull()
        .references(() => kanbanColumns.id, { onDelete: "cascade" }),
    boardId: text("board_id")
        .notNull()
        .references(() => kanbanBoards.id, { onDelete: "cascade" }),

    deadline: text("deadline"),
    priority: text("priority", { enum: ["low", "medium", "high"] }).$default(
        () => "high"
    ),
    note: text("note"),
    columnIndex: int("column_index").notNull(),

    assigneeId: text("assignee_id"),
    creatorId: text("creator_id").references(() => users.id, {
        onDelete: "cascade",
    }),
    createdAt: text("created_at").notNull().default(new Date().toISOString()),
    updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
});

export const teams = sqliteTable("team", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),

    ownerId: text("owner_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    createdAt: text("created_at").notNull().default(new Date().toISOString()),
    updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
});

export const usersToTeams = sqliteTable(
    "user_to_team",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        teamId: text("team_id")
            .notNull()
            .references(() => teams.id, { onDelete: "cascade" }),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.teamId] }),
    })
);

export const milestones = sqliteTable("milestone", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    priority: text("priority", { enum: ["low", "medium", "high"] }).$default(
        () => "high"
    ),
    due: text("due").notNull().default(new Date().toISOString()),
    authorId: text("author_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
    createdAt: text("created_at").notNull().default(new Date().toISOString()),
    updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
});

export const tags = sqliteTable("tag", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
});
