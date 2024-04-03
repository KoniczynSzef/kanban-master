import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("project", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
});
