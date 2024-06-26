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
    refetchNotes: () => Promise<void>;
}

export const SingleNote: React.FC<Props> = (props) => {
    const time = getTime(props.note.createdInMS ?? 0);

    return (
        <ModeProvider>
            <Card.Card className="rounded-2xl max-w-[32rem] w-full flex flex-col">
                <Card.CardHeader className="items-start flex-row gap-8">
                    <NoteHeader
                        note={props.note}
                        refetchNotes={props.refetchNotes}
                    />
                </Card.CardHeader>

                <Separator className="mx-2 md:mx-0 max-w-[28rem] w-full self-center" />

                <Card.CardContent className="my-4">
                    <NoteContent
                        note={props.note}
                        refetchNotes={props.refetchNotes}
                    />
                </Card.CardContent>
                <Card.CardFooter className="mt-auto">
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
