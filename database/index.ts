import { drizzle as vercelDrizzle } from "drizzle-orm/vercel-postgres";
import { drizzle as devDrizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";

import { Client } from "pg";

import * as schema from "./schema";
import * as relations from "./relations";

if (!process.env.DB_URL && !process.env.DATABASE_URL) {
    throw new Error("Env vars are not defined");
}

export const vercelDb = vercelDrizzle(sql, {
    schema: {
        ...schema,
        ...relations,
    },
});

export const devDb = devDrizzle(
    new Client({
        connectionString: process.env.DATABASE_URL,
    }),
    {
        schema: {
            ...schema,
            ...relations,
        },
    }
);

export const db = process.env.NODE_ENV === "production" ? vercelDb : devDb;
