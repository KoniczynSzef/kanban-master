"use client";

export function useStoredSidebarState() {
    const isExpanded = window.localStorage.getItem("isExpanded");

    if (isExpanded === null) {
        window.localStorage.setItem("isExpanded", "true");
        return true;
    }

    return isExpanded === "true";
}
