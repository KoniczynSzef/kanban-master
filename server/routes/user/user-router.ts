import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { roleEnum } from "@/types/models/user-model";
import { addRoleToUser } from "./add-role-to-user";
import { getUserById } from "./get-user-by-id";

export const userRouter = router({
    addRoleToUser: publicProcedure
        .input(
            z.object({
                kindeId: z.string(),
                role: roleEnum,
            })
        )
        .mutation(async ({ input: { kindeId, role } }) => {
            return await addRoleToUser(kindeId, role);
        }),

    getUserById: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await getUserById(input);
    }),
});
