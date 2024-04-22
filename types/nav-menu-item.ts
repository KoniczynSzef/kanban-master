export type NavMenuItemContent = {
    href: string;
    title: string;
    itemDescription: string;
};

export type NavMenuItem = {
    triggerTitle: string;
    content: NavMenuItemContent[];
};
