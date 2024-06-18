import { Button } from "@/components/ui/button";
import * as Dialog from "@/components/ui/dialog";
import React from "react";

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
                <div>
                    {/* 
                            // TODO: Form to create a new note
                    */}

                    <Button type="submit">Create Note</Button>
                </div>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
};
