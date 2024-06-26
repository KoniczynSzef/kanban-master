import React from "react";

export type ModalContext = {
    isOpened: boolean;
    toggleOpen: (open: boolean) => void;
};

export const ModalContext = React.createContext<ModalContext>({
    isOpened: false,
    toggleOpen: () => {},
});
