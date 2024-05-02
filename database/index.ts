import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";

import * as schema from "./schema";
import * as relations from "./relations";

const connectionStr = process.env.DATABASE_URL as string;

export const db = drizzle(postgres(connectionStr), {
    schema: {
        ...schema,
        ...relations,
    },
});
