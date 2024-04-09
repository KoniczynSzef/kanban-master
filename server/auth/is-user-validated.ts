import { getUserByKindeId } from "./get-user-by-kinde-id";

export async function isUserValidated(kindeId: string) {
    const user = await getUserByKindeId(kindeId);

    if (!user) return false;

    return user.validated;
}
