import { checkUserValidation } from "./auth/check-user-validation";
import { router } from "./trpc";

export const appRouter = router({
    checkUserValidation,
});

export type AppRouter = typeof appRouter;
