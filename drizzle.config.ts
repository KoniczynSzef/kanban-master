import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema: "./database/schema.ts",
    out: "./supabase/migrations",
});
