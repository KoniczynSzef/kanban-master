import { relations } from "drizzle-orm";
import { projects, teams, users, usersToTeams } from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
    projects: many(projects),
    usersToTeams: many(usersToTeams),
}));

export const projectsRelations = relations(projects, ({ one }) => ({
    owner: one(users, {
        fields: [projects.ownerId],
        references: [users.id],
    }),

    team: one(teams, {
        fields: [projects.teamId],
        references: [teams.id],
    }),
}));

export const teamsRelations = relations(teams, ({ many, one }) => ({
    projects: many(projects),
    usersToTeams: many(usersToTeams),

    users: one(users, {
        fields: [teams.ownerId],
        references: [users.id],
    }),
}));

export const usersToTeamsRelations = relations(usersToTeams, ({ one }) => ({
    team: one(teams, {
        fields: [usersToTeams.teamId],
        references: [teams.id],
    }),

    user: one(users, {
        fields: [usersToTeams.userId],
        references: [users.id],
    }),
}));
