import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DB_URL as string,
    },
});
