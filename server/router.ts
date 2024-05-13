import SuperJSON from "superjson";
import { mergeRouters } from "./trpc/server";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { authRouter } from "./routes/auth/auth-router";
import { userRouter } from "./routes/user/user-router";
import { teamRouter } from "./routes/teams/team-router";

export const appRouter = mergeRouters(authRouter, teamRouter, userRouter);

export const createSSRHelper = () => {
    return createServerSideHelpers({
        router: appRouter,
        transformer: SuperJSON,
        ctx: () => {},
    });
};

export type AppRouter = typeof appRouter;
