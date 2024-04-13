"use client";

import React, { FC, useState } from "react";
import { trpc } from ".";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import queryClient from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

const Provider: FC<Props> = (props) => {
    const [trpcClient] = useState(() => {
        return trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/api/trpc`,
                    fetch: async (input, init?) => {
                        return fetch(input, {
                            ...init,
                            credentials: "include",
                        });
                    },
                }),
            ],
            transformer: superjson,
        });
    });
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>
        </trpc.Provider>
    );
};

export default Provider;
