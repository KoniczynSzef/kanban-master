"use client";

import { trpc } from "@/server/trpc";
import React from "react";
import { CreateNote } from "./CreateNote";
import { User } from "@/types/models/user-model";
import { ModalContext } from "@/context/modal/modal-context";

interface Props {
    user: User;
}

export const Notes: React.FC<Props> = (props) => {
    const notes = trpc.getAllNotes.useQuery(props.user.id);

    const [isOpened, setIsOpened] = React.useState(false);

    async function refetchNotes() {
        await notes.refetch();
    }

    return (
        <div>
            <p>Notes</p>
            <pre>{JSON.stringify(notes, null, 2)}</pre>

            <ModalContext.Provider
                value={{
                    isOpened,
                    toggleOpen: setIsOpened,
                }}
            >
                <CreateNote user={props.user} refetchNotes={refetchNotes} />
            </ModalContext.Provider>
        </div>
    );
};
