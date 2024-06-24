import { ModeContext } from "@/context/notes/mode-context";
import React from "react";
import { EditNote } from "./EditNote";
import { Note } from "@/types/models/note-model";

interface Props {
    note: Note;
    refetchNotes: () => Promise<void>;
}

export const NoteContent: React.FC<Props> = (props) => {
    const { mode } = React.useContext(ModeContext);

    if (mode === "Edit") {
        return <EditNote note={props.note} refetchNotes={props.refetchNotes} />;
    }

    const textWithBreaks = props.note.content.split("\n").map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <>{textWithBreaks}</>;
};
