import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import * as schema from "./schema";
import * as relations from "./relations";

const tursoClient = createClient({
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
});

export const db = drizzle(tursoClient, {
    schema: {
        ...schema,
        ...relations,
    },
});
