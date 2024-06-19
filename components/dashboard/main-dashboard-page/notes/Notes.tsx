"use client";

import { trpc } from "@/server/trpc";
import React from "react";
import { CreateNote } from "./CreateNote";
import { User } from "@/types/models/user-model";

interface Props {
    user: User;
}

export const Notes: React.FC<Props> = (props) => {
    const notes = trpc.getAllNotes.useQuery(props.user.id);

    async function refetchNotes() {
        await notes.refetch();
    }

    return (
        <div>
            <p>Notes</p>
            <pre>{JSON.stringify(notes, null, 2)}</pre>

            <CreateNote user={props.user} refetchNotes={refetchNotes} />
        </div>
    );
};
