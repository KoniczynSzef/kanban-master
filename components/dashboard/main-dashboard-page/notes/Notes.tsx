"use client";

import { trpc } from "@/server/trpc";
import React from "react";
import { CreateNote } from "./CreateNote";
import { User } from "@/types/models/user-model";
import { ModalContext } from "@/context/modal/modal-context";
import { SingleNote } from "./SingleNote";

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
            <div className="flex flex-col gap-8 border border-muted p-8 rounded-2xl">
                <h3 className="text-xl font-semibold">Latest notes:</h3>

                {notes.data?.map((note) => (
                    <SingleNote key={note.id} note={note} />
                ))}
            </div>

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
