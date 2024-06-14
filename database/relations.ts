import { relations } from "drizzle-orm";
import { milestones, notes, projects, teams, users } from "./schema";
import { usersToProjects, usersToTeams } from "./helper-tables";

export const usersRelations = relations(users, ({ many }) => ({
    project: many(projects),
    usersToTeams: many(usersToTeams),
    usersToProjects: many(usersToProjects),

    milestone: many(milestones),
    note: many(notes),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
    owner: one(users, {
        fields: [projects.ownerId],
        references: [users.id],
    }),

    team: one(teams, {
        fields: [projects.teamId],
        references: [teams.id],
    }),

    usersToProjects: many(usersToProjects),

    milestones: many(milestones),
}));

export const teamsRelations = relations(teams, ({ many, one }) => ({
    projects: many(projects),
    usersToTeams: many(usersToTeams),

    owner: one(users, {
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

export const milestonesRelations = relations(milestones, ({ one }) => ({
    project: one(projects, {
        fields: [milestones.projectId],
        references: [projects.id],
    }),

    author: one(users, {
        fields: [milestones.authorId],
        references: [users.id],
    }),
}));

export const notesRelations = relations(notes, ({ one }) => ({
    authorId: one(users, {
        fields: [notes.authorId],
        references: [users.id],
    }),
}));
