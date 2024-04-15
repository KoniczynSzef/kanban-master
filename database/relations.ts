import { relations } from "drizzle-orm";
import { projects, teams, users } from "./schema";

export const userRelations = relations(users, ({ many }) => ({
    projects: many(projects),
}));

export const projectRelations = relations(projects, ({ one }) => ({
    owner: one(users, {
        fields: [projects.ownerId],
        references: [users.id],
    }),

    team: one(teams, {
        fields: [projects.teamId],
        references: [teams.id],
    }),
}));

export const teamRelations = relations(teams, ({ many }) => ({
    projects: many(projects),
    users: many(users),
}));
