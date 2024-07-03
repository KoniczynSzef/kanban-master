import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/server/trpc/Provider";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactQueryProvider>
            <html lang="en">
                <body
                    className={`${inter.className} flex flex-col bg-white dark:bg-[#020617] relative`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <NextTopLoader color="#7936EC" showSpinner={false} />
                        <Navbar />
                        <main
                            className="flex flex-col gap-48 items-center my-36"
                            id="main-content"
                        >
                            {children}
                        </main>
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ReactQueryProvider>
    );
}
