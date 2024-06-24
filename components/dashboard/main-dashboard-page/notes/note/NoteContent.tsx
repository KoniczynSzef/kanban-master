import { ModeContext } from "@/context/notes/mode-context";
import React from "react";
import { EditNote } from "./EditNote";

interface Props {
    content: string;
}

export const NoteContent: React.FC<Props> = (props) => {
    const { mode } = React.useContext(ModeContext);

    if (mode === "Edit") {
        return <EditNote content={props.content} />;
    }

    const textWithBreaks = props.content.split("\n").map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <>{textWithBreaks}</>;
};
