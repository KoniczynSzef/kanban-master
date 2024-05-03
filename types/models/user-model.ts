import { users } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { z } from "zod";

export type User = InferSelectModel<typeof users>;
export type UserInsert = InferInsertModel<typeof users>;

export type UserRole = Exclude<User["teamRole"], null>;

export const userRoles: UserRole[] = [
    "Backend Developer",
    "Frontend Developer",
    "Customer Support",
    "Data Analyst",
    "QA Tester",
    "Marketing Specialist",
    "Project Manager",
];

export const dashboardRoleSchema = z.object({
    userRole: z.enum([
        "Backend Developer",
        "Frontend Developer",
        "Customer Support",
        "Data Analyst",
        "QA Tester",
        "Marketing Specialist",
        "Project Manager",
    ]),
});
