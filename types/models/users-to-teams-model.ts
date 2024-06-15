import { usersToTeams } from "@/database/schema";
import { InferSelectModel } from "drizzle-orm";

export type UsersToTeams = InferSelectModel<typeof usersToTeams>;
