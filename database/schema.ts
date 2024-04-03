import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("project", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
});

export const users = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
    picture: varchar("picture").notNull(),
    kindeId: varchar("kinde_id").notNull(),
});
