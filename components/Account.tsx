"use client";

import { trpc } from "@/trpc/trpc";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React, { FC } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Input } from "./ui/input";

interface Props {
    kindeUser: KindeUser;
}

const Account: FC<Props> = (props) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const getUserByKindeId = trpc.getUserByKindeId.useQuery(props.kindeUser.id);
    const { data: user } = getUserByKindeId;

    const { mutate: validateAccount } = trpc.validateAccount.useMutation({
        onSettled: async () => {
            await getUserByKindeId.refetch();
        },

        onSuccess: () => {
            console.log(user);

            toast.success("Account validated");
        },
    });

    const { mutate: updateSurname } = trpc.updateSurname.useMutation({
        onSettled: async () => {
            await getUserByKindeId.refetch();
        },

        onSuccess: () => {
            toast.success("Surname updated");
        },
    });

    const handleClick = async () => {
        validateAccount(props.kindeUser.id);
        toast.info("Validating account...");
    };

    if (!user) return null;

    return (
        <div className="flex flex-col gap-8">
            <h1>Account</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <Button className="self-start" onClick={handleClick}>
                Validate account
            </Button>

            <Input placeholder="Type your surname..." ref={inputRef} />
            <Button
                onClick={() =>
                    updateSurname({
                        kindeId: props.kindeUser.id,
                        surname: inputRef.current?.value,
                    })
                }
            >
                Update surname
            </Button>
        </div>
    );
};

export default Account;
