import { publicProcedure, router } from "@/server/trpc/server";
import { z } from "zod";
import { roleEnum } from "@/types/models/user-model";
import { addRoleToUser } from "./add-role-to-user";

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
});
