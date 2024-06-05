import { relations } from "drizzle-orm";
import {
    milestones,
    projects,
    teams,
    users,
    usersToProjects,
    usersToTeams,
} from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
    projects: many(projects),
    usersToTeams: many(usersToTeams),
    usersToProjects: many(usersToProjects),

    milestones: many(milestones),
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
