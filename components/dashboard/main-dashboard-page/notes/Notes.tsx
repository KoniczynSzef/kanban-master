"use client";

import { trpc } from "@/server/trpc";
import React from "react";
import { CreateNote } from "./CreateNote";
import { User } from "@/types/models/user-model";
import { ModalContext } from "@/context/modal/modal-context";
import { SingleNote } from "./note/SingleNote";

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
        <div className="border-2 border-muted p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl font-semibold">Your latest notes</h3>

            {(notes.error || !notes.data) && (
                <p className="text-red-500 my-8">Error fetching notes</p>
            )}

            {notes.data?.length === 0 ? (
                <p className="text-muted-foreground my-8">
                    No notes found.{" "}
                    <span className="font-bold">Create one now!</span>
                </p>
            ) : null}

            <div className="flex flex-wrap my-16 justify-evenly gap-8">
                {notes.data?.map((note) => (
                    <SingleNote
                        key={note.id}
                        note={note}
                        refetchNotes={refetchNotes}
                    />
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
