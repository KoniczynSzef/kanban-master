import { trpc } from "@/app/_trpc/client";

export const checkUserValidation = async (input: string) => {
    const user = trpc.getUserByKindeId.useQuery(input);

    if (!user) return false;

    return user;
};
