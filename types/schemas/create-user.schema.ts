import { User } from "@/database/schema";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { z } from "zod";

export const CreateUserSchema = z.object({
    name: z.string().min(1).max(255),
    surname: z.string().min(1).max(255).optional(),
    email: z.string().email(),
    nickname: z.string().min(1).max(255).optional(),
    bio: z.string().min(1).max(255).optional(),
    businessEmail: z.string().email().optional(),
    picture: z.string().url(),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

/**
 * ? Creates the default values for the create user form
 */
// prettier-ignore
export const createUserDefaultValues = (user: typeof User.$inferSelect | null | undefined, kindeUser: KindeUser | null) => {
    if(!kindeUser && !user) {
        throw new Error("You must provide a user or kindeUser");
    }    

    const defaultValues: CreateUserSchemaType = {
        name: user?.name || kindeUser?.given_name || "",
        surname: user?.surname || kindeUser?.family_name || "",
        email: user?.email || kindeUser?.email || "",
        nickname: user?.nickname || "",
        bio: user?.bio || "",
        businessEmail: user?.businessEmail || "",
        picture: user?.picture || kindeUser?.picture || "",
    };

    return defaultValues;
}
