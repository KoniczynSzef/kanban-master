import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE_URL);

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL, // DB_URL in prod
    },
});
