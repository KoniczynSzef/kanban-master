import { getUserByKindeId } from "./get-user-by-kinde-id";

export async function hasVisitedDashboard(kindeId: string) {
    const user = await getUserByKindeId(kindeId);

    if (!user) {
        throw new Error("User not found");
    }

    return user.visitedDashboard;
}
