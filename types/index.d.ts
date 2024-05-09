import { z } from "zod";

const environmentVariables = z.object({
    // database environment variables
    DATABASE_URL: z.string(),
    DB_URL: z.string(),

    // kinde authentication environment variables
    KINDE_CLIENT_ID: z.string(),
    KINDE_CLIENT_SECRET: z.string(),
    KINDE_ISSUER_URL: z.string(),
    KINDE_SITE_URL: z.string(),
    KINDE_POST_LOGOUT_REDIRECT_URL: z.string(),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string(),

    // other environment variables
    PAGE_URL: z.string(),
    NEXT_PUBLIC_PAGE_URL: z.string(),
});

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof environmentVariables> {}
    }
}

environmentVariables.parse(process.env);
