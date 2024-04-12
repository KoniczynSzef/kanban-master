import { db } from "@/database";
import { users } from "@/database/schema";
import { CreateUserSchema } from "@/types/schemas/create-user.schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const createAccountSchema = z.object({
    kindeId: z.string(),
    user: z.object(CreateUserSchema.shape),
});

export const createAccount = async (
    input: z.infer<typeof createAccountSchema>
) => {
    const newUser = await db
        .update(users)
        .set(input.user)
        .where(eq(users.kindeId, input.kindeId))
        .returning();

    return newUser;
};
