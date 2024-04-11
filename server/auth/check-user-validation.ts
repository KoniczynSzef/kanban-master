import { z } from "zod";
import { publicProcedure } from "../trpc";
import { getUserByKindeId } from "./get-user-by-kinde-id";

// export async function checkUserValidation(kindeId: string) {
//     const user = await getUserByKindeId(kindeId);

//     if (!user) return false;

//     return user.data?.validated;
// }

export const checkUserValidation = publicProcedure
    .input(z.string())
    .query(async (opts) => {
        const user = await getUserByKindeId(opts.input);

        if (!user) return false;

        return user.data?.validated;
    });
