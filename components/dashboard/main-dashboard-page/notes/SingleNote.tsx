import * as Card from "@/components/ui/card";
import { dateFormatter } from "@/lib/formatters/date-formatter";
import { Note } from "@/types/models/note-model";
import React from "react";

interface Props {
    note: Note;
}

export const SingleNote: React.FC<Props> = (props) => {
    const time = new Date(props.note.createdAt);

    return (
        <Card.Card className="rounded-none">
            <Card.CardHeader>
                <Card.CardTitle>{props.note.title}</Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent className="flex items-center justify-between">
                <Card.CardDescription>
                    {props.note.content}
                </Card.CardDescription>

                <span>
                    <strong>Created at:</strong> {dateFormatter.format(time)}
                </span>
            </Card.CardContent>
        </Card.Card>
    );
};
