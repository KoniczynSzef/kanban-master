import { StaticImageData } from "next/image";

export type Feature = {
    title: string;
    description: string;
    imageImport: StaticImageData;
    imageAlt: string;
    className: string;
};
