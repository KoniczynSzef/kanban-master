import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL || !process.env.DB_URL) {
    throw new Error("DATABASE_URL or DB_URL not set in .env");
}

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL, // DB_URL in prod
    },
});
