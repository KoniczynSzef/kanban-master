import {
    pgTable,
    uuid,
    varchar,
    timestamp,
    integer,
} from "drizzle-orm/pg-core";

export const projects = pgTable("project", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    description: varchar("description"),
    ownerId: uuid("owner_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const users = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
    picture: varchar("picture").notNull(),
    kindeId: varchar("kinde_id").notNull(),

    nickname: varchar("nickname"),
    bio: varchar("bio"),
    businessEmail: varchar("business_email"),

    teamId: uuid("team_id"),
});

export const KanbanBoard = pgTable("kanban_board", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    projectId: uuid("project_id").notNull(),
});

export const KanbanColumn = pgTable("kanban_column", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    boardId: uuid("board_id").notNull(),
});

export const KanbanTask = pgTable("kanban_task", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(),
    description: varchar("description"),
    columnId: uuid("column_id").notNull(),
    boardId: uuid("board_id").notNull(),

    deadline: timestamp("deadline"),
    priority: varchar("priority", { enum: ["low", "medium", "high"] }),
    note: varchar("note"),
    columnIndex: integer("column_index").notNull(),

    assigneeId: uuid("assignee_id"),
    creatorId: uuid("creator_id"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const Team = pgTable("team", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    description: varchar("description"),
    ownerId: uuid("owner_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
