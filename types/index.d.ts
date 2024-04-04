import { z } from "zod";

const environmentVariables = z.object({
    // database environment variables
    XATA_DATABASE_URL: z.string(),
    XATA_POSTGRES_URL: z.string(),
    XATA_BRANCH: z.string(),
    XATA_API_KEY: z.string(),

    // kinde authentication environment variables
    KINDE_CLIENT_ID: z.string(),
    KINDE_CLIENT_SECRET: z.string(),
    KINDE_ISSUER_URL: z.string(),
    KINDE_SITE_URL: z.string(),
    KINDE_POST_LOGOUT_REDIRECT_URL: z.string(),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string(),
});

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof environmentVariables> {}
    }
}
