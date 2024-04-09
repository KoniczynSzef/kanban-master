import { getUserByKindeId } from "./get-user-by-kinde-id";

export async function validateUser(kindeId: string) {
    const user = await getUserByKindeId(kindeId);

    if (!user) return false;

    return user.data?.validated;
}
