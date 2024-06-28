import SuperJSON from "superjson";
import { mergeRouters } from "./trpc/server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { authRouter } from "./routes/auth/auth-router";
import { userRouter } from "./routes/user/user-router";
import { teamRouter } from "./routes/teams/team-router";
import { projectsRouter } from "./routes/projects/projects-router";
import { taskRouter } from "./routes/tasks/task-router";
import { notesRouter } from "./routes/notes/notes-router";

export const appRouter = mergeRouters(
    authRouter,
    teamRouter,
    userRouter,
    projectsRouter,
    taskRouter,
    notesRouter
);

export const createSSRHelper = () => {
    return createServerSideHelpers({
        router: appRouter,
        transformer: SuperJSON,
        ctx: () => {},
    });
};

export type AppRouter = typeof appRouter;
