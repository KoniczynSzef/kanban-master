import {
    boolean,
    date,
    pgTable,
    primaryKey,
    real,
    text,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
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
            "UI Designer",
            "UX Designer",
            "DevOps Engineer",
        ],
    }),

    plan: text("plan", { enum: ["free", "pro", "enterprise"] }).$default(
        () => "free"
    ),

    validated: boolean("validated").notNull().default(false),
    visitedDashboard: boolean("visited_dashboard").notNull().default(false),

    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

export const projects = pgTable("project", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),

    deadline: date("deadline"),
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
    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

export const kanbanBoards = pgTable("kanban_board", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
});

export const kanbanColumns = pgTable("kanban_column", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    boardId: text("board_id")
        .notNull()
        .references(() => kanbanBoards.id, { onDelete: "cascade" }),
});

export const kanbanTasks = pgTable("kanban_task", {
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
    status: text("status", {
        enum: ["active", "completed", "on hold", "canceled"],
    }).$default(() => "active"),

    deadline: date("deadline"),
    priority: text("priority", { enum: ["low", "medium", "high"] }).$default(
        () => "high"
    ),
    note: text("note"),
    columnIndex: real("column_index").notNull(),

    assigneeId: text("assignee_id"),
    creatorId: text("creator_id").references(() => users.id, {
        onDelete: "cascade",
    }),
    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

export const milestones = pgTable("milestone", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    priority: text("priority", { enum: ["low", "medium", "high"] }).$default(
        () => "high"
    ),
    due: date("due").notNull().default(new Date().toISOString()),
    authorId: text("author_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

export const tags = pgTable("tag", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    projectId: text("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),
});

export const teams = pgTable("team", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    teamStatus: text("team_status", {
        enum: ["active", "inactive", "archived"],
    }).$default(() => "active"),
    teamChatLink: text("team_chat_link"),
    teamProductivityScore: real("team_productivity_score").notNull().default(0),

    teamColor: text("team_color"),

    ownerId: text("owner_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

export const notes = pgTable("note", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    content: text("content"),
    authorId: text("author_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),

    createdAt: date("created_at").notNull().default(new Date().toISOString()),
    updatedAt: date("updated_at").notNull().default(new Date().toISOString()),
});

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
