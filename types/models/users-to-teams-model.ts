import { usersToTeams } from "@/database/helper-tables";
import { InferSelectModel } from "drizzle-orm";

export type UsersToTeams = InferSelectModel<typeof usersToTeams>;
