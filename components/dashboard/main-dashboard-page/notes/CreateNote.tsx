"use client";

import { Button } from "@/components/ui/button";
import * as Dialog from "@/components/ui/dialog";
import React from "react";
import { CreateNoteForm } from "./CreateNoteForm";

interface Props {}

export const CreateNote: React.FC<Props> = () => {
    return (
        <Dialog.Dialog>
            <Dialog.DialogTrigger asChild>
                <Button>Create Note</Button>
            </Dialog.DialogTrigger>

            <Dialog.DialogContent>
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>New Note</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Create your new note here. Provide a descriptive title
                        and a detailed content.
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>

                <CreateNoteForm />
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
};
