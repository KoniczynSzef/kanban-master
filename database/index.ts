import { drizzle as vercelDrizzle } from "drizzle-orm/vercel-postgres";
import { drizzle as devDrizzle } from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";

import postgres from "postgres";

import * as schema from "./schema";
import * as helperTables from "./helper-tables";
import * as relations from "./relations";

if (!process.env.DB_URL && !process.env.DATABASE_URL) {
    throw new Error("Env vars are not defined");
}

export const vercelDb = vercelDrizzle(sql, {
    schema: {
        ...schema,
        ...relations,
        ...helperTables,
    },
});

export const devDb = devDrizzle(postgres(process.env.DATABASE_URL), {
    schema: {
        ...schema,
        ...relations,
        ...helperTables,
    },
});

export const db = process.env.NODE_ENV === "production" ? vercelDb : devDb;
