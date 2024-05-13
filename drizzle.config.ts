import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined!");
}

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",

    strict: true,
    verbose: true,

    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
