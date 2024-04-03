import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./drizzle",
    driver: "pg",
    verbose: true,
    strict: true,

    dbCredentials: {
        connectionString: process.env.XATA_POSTGRES_URL as string,
    },
});
