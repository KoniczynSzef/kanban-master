import { relations } from "drizzle-orm";
import { projects, users } from "./schema";

export const userRelations = relations(users, ({ many }) => ({
    projects: many(projects),
}));

export const projectRelations = relations(projects, ({ one }) => ({
    owner: one(users, {
        fields: [projects.ownerId],
        references: [users.id],
    }),
}));
