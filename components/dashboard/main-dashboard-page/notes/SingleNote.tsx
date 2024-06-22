import * as Card from "@/components/ui/card";
import { dateFormatter } from "@/lib/formatters/date-formatter";
import { Note } from "@/types/models/note-model";
import React from "react";
import { NoteContent } from "./NoteContent";
import { trpc } from "@/server/trpc";
import { toast } from "sonner";

interface Props {
    note: Note;
}

function getUserById(id: string) {
    try {
        return trpc.getUserById.useQuery(id);
    } catch (error) {
        return "User not found";
    }
}

export const SingleNote: React.FC<Props> = (props) => {
    const time = new Date(props.note.createdAt);

    console.log(time);

    const user = getUserById(props.note.authorId);

    if (user === "User not found") {
        toast.error("User not found");
        return null;
    }

    return (
        <Card.Card className="rounded-2xl w-72 h-80">
            <Card.CardHeader>
                <Card.CardTitle>{props.note.title}</Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent>
                <Card.CardDescription>
                    <NoteContent content={props.note.content} />
                </Card.CardDescription>

                <span>
                    <strong>Created at:</strong> {dateFormatter.format(time)}
                </span>
            </Card.CardContent>
        </Card.Card>
    );
};
