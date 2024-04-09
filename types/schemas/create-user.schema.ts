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

export const createUserDefaultValues: CreateUserSchemaType = {
    name: "",
    surname: "",
    email: "",
    nickname: "",
    bio: "",
    businessEmail: "",
    picture: "",
};
