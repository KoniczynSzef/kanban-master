import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import * as schema from "./schema";
import * as relations from "./relations";

if (!process.env.DB_URL) {
    throw new Error("DB_URL is not defined");
}

export const db = drizzle(sql, {
    schema: {
        ...schema,
        ...relations,
    },
});
