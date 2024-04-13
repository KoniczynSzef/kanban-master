import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";

export const t = initTRPC.create({
    transformer: SuperJSON,
});

export const router = t.router;
export const publicProcedure = t.procedure;
