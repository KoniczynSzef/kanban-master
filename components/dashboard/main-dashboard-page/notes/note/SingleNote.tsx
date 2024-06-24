import * as Card from "@/components/ui/card";
import { Note } from "@/types/models/note-model";
import React from "react";
import { NoteContent } from "./NoteContent";
import { getNoteTime } from "@/lib/formatters/get-note-time";
import { Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NoteHeader } from "./NoteHeader";
import { ModeProvider } from "./ModeProvider";

interface Props {
    note: Note;
}

export const SingleNote: React.FC<Props> = (props) => {
    const time = getTime(props.note.createdInMS ?? 0);

    return (
        <ModeProvider>
            <Card.Card className="rounded-2xl w-[32rem] flex flex-col">
                <NoteHeader note={props.note} />

                <Separator className="w-[28rem] self-center" />

                <Card.CardContent className="my-4">
                    <Card.CardDescription>
                        <NoteContent content={props.note.content} />
                    </Card.CardDescription>
                </Card.CardContent>
                <Card.CardFooter>
                    <span className="text-muted-foreground flex ml-auto gap-2">
                        <Globe /> {time}
                    </span>
                </Card.CardFooter>
            </Card.Card>
        </ModeProvider>
    );
};

function getTime(timeInMS: number) {
    const time = new Date(timeInMS);

    return getNoteTime(time.getTime());
}
