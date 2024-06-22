import React from "react";

interface Props {
    content: string | null;
}

export const NoteContent: React.FC<Props> = (props) => {
    if (!props.content) {
        return null;
    }

    const textWithBreaks = props.content.split("\n").map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <>{textWithBreaks}</>;
};
