import React from "react";

export type Mode = "Edit" | "View";

export type ModeContext = {
    mode: Mode;
    setMode: (mode: Mode) => void;
};

export const ModeContext = React.createContext<ModeContext>({
    mode: "View",
    setMode: () => {},
});
