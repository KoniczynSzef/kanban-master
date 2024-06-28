import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props extends ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = (props) => {
    return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
};
