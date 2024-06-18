"use client";

import { trpc } from "@/server/trpc";
import React from "react";
import { CreateNote } from "./CreateNote";

interface Props {
    userId: string;
}

export const Notes: React.FC<Props> = (props) => {
    const notes = trpc.getAllNotes.useQuery(props.userId);

    return (
        <div>
            <p>Notes</p>
            <pre>{JSON.stringify(notes, null, 2)}</pre>

            <CreateNote />
        </div>
    );
};
