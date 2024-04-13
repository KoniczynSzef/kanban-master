import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { z } from "zod";
import { User } from "../models";

const emailSchema = z.string().email();
const urlSchema = z.string().url();

export const CreateUserSchema = z.object({
    name: z.string().min(1).max(255),
    surname: z.string().max(255).optional(),
    email: z.string().email(),
    nickname: z.string().max(255).optional(),
    bio: z.string().max(255).optional(),
    businessEmail: z
        .string()
        .optional()
        .refine(
            (value) =>
                value?.length === 0 || emailSchema.safeParse(value).success,
            { message: "Invalid email " }
        ),
    picture: z
        .string()
        .optional()
        .refine(
            (value) =>
                value?.length === 0 || urlSchema.safeParse(value).success,
            { message: "Invalid URL" }
        ),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

/**
 * ? Creates the default values for the create user form
 */
// prettier-ignore
export const createUserDefaultValues = (user: User | null | undefined, kindeUser: KindeUser | null) => {
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

export const userProps: (keyof CreateUserSchemaType)[] = [
    "name",
    "surname",
    "nickname",
    "email",
    "bio",
    "businessEmail",
    "picture",
];
