"use client";

import { trpc } from "@/trpc/trpc";
import React, { FC } from "react";

interface Props {}

const Users: FC<Props> = () => {
    const { data: users } = trpc.fetchUsers.useQuery();
    return (
        <div>
            {users?.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;
