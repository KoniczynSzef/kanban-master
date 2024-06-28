import { Mode, ModeContext } from "@/context/notes/mode-context";
import React from "react";

export function ModeProvider(props: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<Mode>("View");

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {props.children}
        </ModeContext.Provider>
    );
}
