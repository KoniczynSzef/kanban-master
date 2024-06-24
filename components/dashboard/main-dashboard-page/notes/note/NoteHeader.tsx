import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Card from "@/components/ui/card";
import { trpc } from "@/server/trpc";
import { Note } from "@/types/models/note-model";
import React from "react";
import { toast } from "sonner";
import { NoteMenu } from "./NoteMenu";

interface Props {
    note: Note;
    refetchNotes: () => Promise<void>;
}

function getUserById(id: string) {
    try {
        return trpc.getUserById.useQuery(id);
    } catch (error) {
        return "User not found";
    }
}

export const NoteHeader: React.FC<Props> = (props) => {
    const res = getUserById(props.note.authorId);

    if (res === "User not found") {
        toast.error("User not found");
        return null;
    }

    const user = res.data;

    if (!user) {
        return null;
    }

    // ? This is just for making sure user has a team role for the sake of this example
    user.teamRole = "Backend Developer";

    return (
        <Card.CardHeader className="items-start flex-row gap-8">
            <Avatar className="bg-purple-200">
                <AvatarFallback>{user.name[0]}</AvatarFallback>
                <AvatarImage src={user.picture} alt={user?.name} />
            </Avatar>
            <div className="flex flex-col">
                <Card.CardTitle>{user.name}</Card.CardTitle>
                <span className="bg-purple-700 rounded-2xl px-2 py-1 text-white mt-4 text-sm">
                    {user.teamRole}
                </span>
            </div>

            <div className="ml-auto">
                <NoteMenu note={props.note} refetchNotes={props.refetchNotes} />
            </div>
        </Card.CardHeader>
    );
};
